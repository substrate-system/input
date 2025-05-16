import { Input } from '../src/index.js'

declare global {
    interface HTMLElementTagNameMap {
        'example-input':ExampleInput
    }
}

class ExampleInput extends Input {
    static observedAttributes = ['disabled']
}
