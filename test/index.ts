import { test } from '@substrate-system/tapzero'
import { waitFor } from '@substrate-system/dom'
import '../src/index.js'

test('should find the element', async t => {
    document.body.innerHTML += `
        <substrate-input
            id="test-input"
            label="Test"
            placeholder="Enter text"
        ></substrate-input>
    `

    const el = await waitFor('substrate-input input')
    t.ok(el, 'should find an input element')
})

test('input element should always have a type', async t => {
    document.body.innerHTML += `
        <substrate-input id="abc"></substrate-input>
        <substrate-input id="custom-type" type="foo"></substrate-input>
    `

    const el = await waitFor('#abc') as HTMLInputElement
    t.equal(el.getAttribute('type'), 'text', 'should default to "text" type')
    const el2 = await waitFor('#custom-type') as HTMLInputElement
    t.equal(el2.getAttribute('type'), 'foo',
        'Can pass in an arbitrary "type" attribute')
})

test('should delegate id to inner input', async t => {
    document.body.innerHTML += `
        <substrate-input id="my-field" name="field"></substrate-input>
    `

    const el = await waitFor('substrate-input[name="field"]')
    const input = el!.querySelector('input')
    t.equal(input?.getAttribute('id'), 'my-field',
        'inner input should have the delegated id')
    t.ok(!el!.hasAttribute('id'),
        'host element should not retain the id attribute')
})

test('should delegate aria attributes to inner input', async t => {
    document.body.innerHTML += `
        <substrate-input
            name="aria-test"
            aria-describedby="hint"
        ></substrate-input>
    `

    const el = await waitFor('substrate-input[name="aria-test"]')
    const input = el!.querySelector('input')
    t.equal(input?.getAttribute('aria-describedby'), 'hint',
        'inner input should have aria-describedby')
    t.ok(!el!.hasAttribute('aria-describedby'),
        'host element should not retain aria attributes')
})

test('should render label when label attribute is set', async t => {
    document.body.innerHTML += `
        <substrate-input
            name="labeled"
            label="My Label"
        ></substrate-input>
    `

    const el = await waitFor('substrate-input[name="labeled"]')
    const label = el!.querySelector('label')
    t.ok(label, 'should render a label element')
    t.equal(label?.textContent?.trim(), 'My Label',
        'label should have correct text')
})

test('all done', () => {
    // @ts-expect-error tests
    window.testsFinished = true
})
