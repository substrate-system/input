import { Input } from '../src/index.js'

declare global {
    interface HTMLElementTagNameMap {
        'example-input':ExampleInput;
        'text-input':TextInput;
    }
}

class ExampleInput extends Input {
    static tag = 'example-input'

    get type () {
        return 'submit'
    }

    render () {
        this.innerHTML = super.render()!
    }
}

ExampleInput.define()

export class TextInput extends Input {
    static tag = 'text-input'

    get type () {
        return 'text'
    }
}

TextInput.define()
