const React = require('react');
const Navbar = require('../components/Navbar');

/*
  Main Container
*/


class Main extends React.Component {
  render() {
     return (
       <div className='main-container'>
         <Navbar />
         {this.props.children}
         <div id="articleButton">+</div>
       </div>
     )
  }
};

module.exports = Main;
