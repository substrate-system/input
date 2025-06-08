export abstract class Input extends HTMLElement {
    // for `attributeChangedCallback`
    static observedAttributes = ['autofocus', 'disabled']
    static tag:string

    static define (this:((new (...args:any[]) => Input) & typeof Input)) {
        if (!('customElements' in window)) return
        if (customElements.get(this.tag)) return  // only define it once

        return customElements.define(this.tag, this)
    }

    constructor () {
        super()
        const disabled = this.getAttribute('disabled')
        if (disabled !== null) {
            setTimeout(() => {
                // need to wait for it to render
                this.disabled = true
            }, 0)
        }

        // timeout b/c we need to render first
        setTimeout(() => {
            const attr = this.getAttribute('value')
            if (attr) this.value = attr

            const type = this.getAttribute('type')
            if (type) this.type = type

            const name = this.getAttribute('name')
            if (name) this.name = name
        }, 0)
    }

    get input ():HTMLInputElement|null {
        return this.querySelector('input')
    }

    get tabindex ():number {
        const i = this.input?.getAttribute('tabindex')
        if (!i) return 0
        return parseInt(i)
    }

    get name ():string|undefined|null {
        return this.input?.name
    }

    set name (newName:string) {
        if (!this.input) return
        this.input.name = newName
    }

    /**
     * Remove from `this` element and also child.
     */
    _removeAttribute (name:string) {
        this.removeAttribute(name)
        this.input?.removeAttribute(name)
    }

    get disabled ():boolean {
        return !!(this.input?.hasAttribute('disabled'))
    }

    set disabled (disabledValue:boolean) {
        if (!disabledValue) {
            this._removeAttribute('disabled')
            this.input?.setAttribute('aria-disabled', 'false')
        } else {
            this.input?.setAttribute('disabled', '')
            this.input?.setAttribute('aria-disabled', 'true')
        }
    }

    /**
     * Handle 'example' attribute changes
     * @see {@link https://gomakethings.com/how-to-detect-when-attributes-change-on-a-web-component/#organizing-your-code Go Make Things article}
     *
     * @param  {string} oldValue The old attribute value
     * @param  {string} newValue The new attribute value
     */
    handleChange_disabled (oldValue:string, newValue:string) {
        if (!this.input) {
            setTimeout(() => {
                if (newValue === null) {
                    // [example] was removed
                    this.disabled = false
                } else {
                    // set [example] attribute
                    this.disabled = true
                }
            }, 0)  // wait to render
        } else {
            if (newValue === null) {
                this.disabled = false
            } else {
                this.disabled = true
            }
        }
    }

    /**
     * Runs when the value of an attribute is changed
     *
     * @param  {string} name     The attribute name
     * @param  {string} oldValue The old attribute value
     * @param  {string} newValue The new attribute value
     */
    attributeChangedCallback (name:string, oldValue:string, newValue:string) {
        const handler = this[`handleChange_${name}`];
        (handler && handler.call(this, oldValue, newValue))
        this.render()
    }

    connectedCallback () {
        this.render()
    }

    get type ():string|null|undefined {
        return this.input?.getAttribute('type')
    }

    set type (value:string) {
        this._setAttribute('type', value)
    }

    get value () {
        return this.input?.value
    }

    set value (text:string|undefined|null) {
        if (!text) this.input?.removeAttribute('value')
        else {
            this.input!.value = text
        }
    }

    /**
     * Set attributes on the internal input element.
     */
    _setAttribute (name:string, value:boolean|string|null):void {
        if (!value) {
            return this._removeAttribute(name)
        }

        if (value === true) {
            // true means set the attribute with no value
            return this.input?.setAttribute(name, '')
        }

        // else, set the value
        this.input?.setAttribute(name, value)
    }

    render ():string|void {  // void for child class
        const {
            type,
            autofocus,
            tabindex,
            disabled,
            value,
            name
        } = this

        const classes:string[] = ['substrate-input']

        const btn = !!(this.type === 'submit' || this.type === 'button')

        const props = ([
            `class="${classes.filter(Boolean).join(' ')}"`,
            disabled ? 'disabled' : '',
            disabled ? 'aria-disabled="true"' : 'aria-disabled="false"',
            autofocus ? 'autofocus' : '',
            type ? `type="${this.type}"` : '',
            tabindex ? `tabindex="${tabindex}"` : 'tabindex="0"',
            btn ? 'role="button"' : '',
            value ? `value=${value}` : '',
            name ? `name=${name}` : '',
        ]).filter(Boolean).join(' ')

        return `<input ${props} />`
    }
}
