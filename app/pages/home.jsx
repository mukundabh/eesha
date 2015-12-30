define(function (require) {
  const React = require('react');
  const HeaderComponent = require('app/components/header');
  const BodyComponent = require('app/components/body');
  const FooterComponent = require('app/components/footer');
  const target = document.querySelector('#content-root');
  const Grid = require('reactBootstrap').Grid;

  const RootComponent = React.createClass({
    render: () => {
      return (
        <Grid>
          <HeaderComponent/>
          <BodyComponent/>
          <FooterComponent/>
        </Grid>
      );
    }
  });

  const element = <RootComponent/>;
  React.render(element, target);
});
