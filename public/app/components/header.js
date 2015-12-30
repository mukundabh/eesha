'use strict';

define(function (require) {
  var React = require('react');
  var Row = require('reactBootstrap').Row;
  var Col = require('reactBootstrap').Col;
  var Image = require('reactBootstrap').Image;
  var Nav = require('reactBootstrap').Nav;
  var NavItem = require('reactBootstrap').NavItem;
  var NavDropdown = require('reactBootstrap').NavDropdown;
  var MenuItem = require('reactBootstrap').MenuItem;

  return React.createClass({

    handleSelect: function handleSelect() {
      window.alert('Eesha');
    },

    render: function render() {
      return React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { sm: 12 },
          React.createElement(Image, { src: 'public/assets/eeshalogo.png', thumbnail: true, className: 'header-logo' }),
          React.createElement(
            Nav,
            { bsStyle: 'tabs', activeKey: 1, onSelect: this.handleSelect },
            React.createElement(
              NavItem,
              { eventKey: 1, href: '/home' },
              'NavItem 1 content'
            ),
            React.createElement(
              NavItem,
              { eventKey: 2, title: 'Item' },
              'NavItem 2 content'
            ),
            React.createElement(
              NavItem,
              { eventKey: 3, disabled: true },
              'NavItem 3 content'
            ),
            React.createElement(
              NavDropdown,
              { eventKey: 4, title: 'Dropdown', id: 'nav-dropdown' },
              React.createElement(
                MenuItem,
                { eventKey: '4.1' },
                'Action'
              ),
              React.createElement(
                MenuItem,
                { eventKey: '4.2' },
                'Another action'
              ),
              React.createElement(
                MenuItem,
                { eventKey: '4.3' },
                'Something else here'
              ),
              React.createElement(MenuItem, { divider: true }),
              React.createElement(
                MenuItem,
                { eventKey: '4.4' },
                'Separated link'
              )
            )
          )
        )
      );
    }
  });
});