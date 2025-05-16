import { test } from '@substrate-system/tapzero'
import { waitFor, qs } from '@substrate-system/dom'
import { Input } from '../src/index.js'

test('input element', async t => {
    class FooBar extends Input {
        static tag = 'foo-bar'
    }

    window.customElements.define('foo-bar', FooBar)

    document.body.innerHTML += `
        <foo-bar class="test" type="button">
        </foo-bar>
    `

    const el = await waitFor('input')
    t.ok(el, 'should find an element')

    t.equal(qs('foo-bar input')?.getAttribute('type'), 'button',
        'should add "type" to the input')
})
