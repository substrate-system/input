import '../src/index.css'
import '../src/index.js'

if (import.meta.env.DEV || import.meta.env.MODE === 'staging') {
    localStorage.setItem('DEBUG', 'substrate-input')
} else {
    localStorage.removeItem('DEBUG')
}

document.body.innerHTML += `
    <form>
        <substrate-input
            name="example"
            aria-describedby="label-explanation"
            id="example"
            label="Name"
            placeholder="Jane Doe"
        ></substrate-input>
        <div id="label-explanation">
            This label is passed in as an attribute.
        </div>
    </form>

    <form>
        <label for="nolabel">No label attribute</label>
        <substrate-input
            id="nolabel"
            placeholder="Enter text"
            type="email"
            aria-describedby="explanation"
        ></substrate-input>
        <div id="explanation">
            The label here is created in the application code,
            not passed in as an attribute.
        </div>
    </form>
`
