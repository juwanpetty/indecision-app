'use strict';

console.log('App.js is running');

var app = {
  title: 'Decide',
  subtitle: 'We make the decisions',
  options: ['One', 'Two']

  // JSX - JavaScript XML
};var template = React.createElement(
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
    app.options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
