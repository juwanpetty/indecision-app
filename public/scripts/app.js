'use strict';

console.log('app.js is running...');

var app = {
    title: 'Indecision App',
    subtitle: 'Let the computer decide for you',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};
var resetCount = function resetCount() {
    console.log('resetCount');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: resetCount },
        'Reset'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    )
);
console.log(templateTwo);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
