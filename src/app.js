console.log('app.js is running...');

const app = {
    title: 'Indecision App',
    subtitle: 'Let the computer decide for you',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const resetCount = () => {
    console.log('resetCount');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={minusOne}>-1</button>
    </div>
);
console.log(templateTwo);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
