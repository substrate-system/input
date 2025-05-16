import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('example test', async t => {
    document.body.innerHTML += `
        <input class="test">
        </input>
    `

    const el = await waitFor('input')

    t.ok(el, 'should find an element')
})
