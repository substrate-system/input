import { createDebug } from '@substrate-system/debug'
const debug = createDebug()

export abstract class Input extends HTMLElement {
    // Define the attributes to observe
    // need this for `attributeChangedCallback`
    static observedAttributes = ['autofocus', 'disabled', 'spinning']
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

        setTimeout(() => {
            const attr = this.getAttribute('value')
            if (attr) {
                this.value = attr
            }
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
        debug('changing disabled', oldValue, newValue)
        if (!this.input) {
            debug('not input')
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
            debug('input')
            if (newValue === null) {
                debug('is null')
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

    render () {
        const {
            type,
            autofocus,
            tabindex,
            disabled,
            value
        } = this

        const classes:string[] = ['substrate-input']

        const btn = !!(this.type === 'submit' || this.type === 'button')

        const props = ([
            `class="${classes.filter(Boolean).join(' ')}"`,
            disabled ? 'disabled' : '',
            autofocus ? 'autofocus' : '',
            type ? `type="${this.type}"` : '',
            tabindex ? `tabindex="${tabindex}"` : 'tabindex="0"',
            btn ? 'role="button"' : '',
            value ? `value=${value}` : ''
        ]).filter(Boolean).join(' ')

        this.innerHTML = `<input
            ${props}
        />`
    }
}
