import '../src/index.css'
import './example-input.ts'
import Debug from '@substrate-system/debug'
const debug = Debug()

document.body.innerHTML += `
    <example-input value="hello"></example-input>
`

setTimeout(() => {  // wait for things to render
    const el = document.querySelector('example-input')
    el?.addEventListener('click', ev => {
        ev.preventDefault()
        debug('click...')
    })
}, 0)

document.body.innerHTML += `
    <example-input disabled value="this is disabled"></example-input>
`

document.body.innerHTML += '<example-input value="another input"></example-input>'

document.body.innerHTML += `<hr /><div>
    <text-input></text-input>
</div>`
