'use strict';

define(function (require) {
  var React = require('react');
  var HeaderComponent = require('app/components/header');
  var BodyComponent = require('app/components/body');
  var FooterComponent = require('app/components/footer');
  var target = document.querySelector('#content-root');
  var Grid = require('reactBootstrap').Grid;

  var RootComponent = React.createClass({
    displayName: 'RootComponent',

    render: function render() {
      return React.createElement(
        Grid,
        null,
        React.createElement(HeaderComponent, null),
        React.createElement(BodyComponent, null),
        React.createElement(FooterComponent, null)
      );
    }
  });

  var element = React.createElement(RootComponent, null);
  React.render(element, target);
});