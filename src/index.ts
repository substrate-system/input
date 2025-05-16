import { createDebug } from '@substrate-system/debug'
const debug = createDebug()

export abstract class Input extends HTMLElement {
    // Define the attributes to observe
    // need this for `attributeChangedCallback`
    static observedAttributes = ['autofocus', 'disabled', 'spinning']
    static tag:string

    static define (this:((new (...args:any[]) => Input) & typeof Input)) {
        if (!('customElements' in window)) return

        return customElements.define(
            this.tag,
            this
        )
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
    handleChange_example (oldValue:string, newValue:string) {
        debug('handling example change', oldValue, newValue)

        if (newValue === null) {
            // [example] was removed
        } else {
            // set [example] attribute
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
        debug('an attribute changed', name)
        const handler = this[`handleChange_${name}`];
        (handler && handler(oldValue, newValue))
        this.render()
    }

    disconnectedCallback () {
        debug('disconnected')
    }

    connectedCallback () {
        debug('connected')

        this.render()
    }

    get type ():string|null|undefined {
        return this.input?.getAttribute('type')
    }

    set type (value:string) {
        this._setAttribute('type', value)
    }

    /**
     * Set attributes on the internal button element.
     */
    _setAttribute (name:string, value:boolean|string|null):void {
        if (value === false) {
            // false means remove the attribute
            this._removeAttribute(name)
            this.input?.removeAttribute(name)
        } else {
            if (value === true) {
                // true means set the attribute with no value
                return this.input?.setAttribute(name, '')
            }

            if (value === null) {
                // null means remove
                return this._removeAttribute(name)
            }

            // else, set value to a string
            this.input?.setAttribute(name, value)
        }
    }

    render () {
        const {
            type,
            autofocus,
            tabindex,
            disabled,
        } = this

        const classes:string[] = ['substrate-input']

        const props = ([
            `class="${classes.filter(Boolean).join(' ')}"`,
            disabled ? 'disabled' : '',
            autofocus ? 'autofocus' : '',
            type ? `type="${this.type}"` : '',
            tabindex ? `tabindex="${tabindex}"` : 'tabindex="0"',
            'role="button"'
        ]).filter(Boolean).join(' ')

        this.innerHTML = `<input ${props}>${this.innerHTML}</input>`
    }
}
