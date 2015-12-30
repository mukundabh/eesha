define(function (require) {
  const React = require('react');
  const Row = require('reactBootstrap').Row;
  const Col = require('reactBootstrap').Col;
  const Image = require('reactBootstrap').Image;
  const Nav = require('reactBootstrap').Nav;
  const NavItem = require('reactBootstrap').NavItem;
  const NavDropdown = require('reactBootstrap').NavDropdown;
  const MenuItem = require('reactBootstrap').MenuItem;

  return React.createClass({

    handleSelect: () => {
      window.alert('Eesha');
    },

    render: function () {
      return (
        <Row>
          <Col sm={12}>
            <Image src='public/assets/eeshalogo.png' thumbnail className='header-logo'/>
            <Nav bsStyle='tabs' activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
              <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
              <NavDropdown eventKey={4} title='Dropdown' id='nav-dropdown'>
                <MenuItem eventKey='4.1'>Action</MenuItem>
                <MenuItem eventKey='4.2'>Another action</MenuItem>
                <MenuItem eventKey='4.3'>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey='4.4'>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Col>
        </Row>
      );
    }
  });
});
