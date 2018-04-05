let visibility = false;
const onToggleVisible = () => {
    visibility = !visibility;

    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleVisible}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && <p>Here are some details that were hidden</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();