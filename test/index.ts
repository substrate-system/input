import { test } from '@substrate-system/tapzero'
import { waitFor, qs } from '@substrate-system/dom'
import { Input } from '../src/index.js'

test('input element', async t => {
    class FooBar extends Input {
        static tag = 'foo-bar'

        render () {
            this.innerHTML = super.render()!
        }
    }
    FooBar.define()

    document.body.innerHTML += `
        <foo-bar class="test" type="button" name="fooo">
        </foo-bar>
    `

    const el = await waitFor('foo-bar input')
    t.ok(el, 'should find an element')

    t.equal(qs('foo-bar input')?.getAttribute('type'), 'button',
        'should add "type" to the input')
})

test('Set the "type"', async t => {
    class Abc extends Input {
        static tag = 'abc-el'

        get type () {
            return 'text'
        }

        render ():string|void {
            this.innerHTML = super.render()!
        }
    }
    Abc.define()

    document.body.innerHTML += `
        <abc-el name="abc"></abc-el>
    `

    const el = await waitFor('abc-el')
    t.equal(el?.querySelector('input')?.getAttribute('type'), 'text',
        'Can set the type as a class property')
})
