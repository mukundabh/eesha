'use strict';

define(function (require) {
  var React = require('react');

  return React.createClass({
    render: function render() {
      return React.createElement(
        'footer',
        null,
        React.createElement(
          'h1',
          null,
          'Eesha Footer'
        )
      );
    }
  });
});