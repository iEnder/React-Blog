const React = require('react');
const Storycard = require('../components/Storycard');

/*
  Home
*/

class Home extends React.Component {
  render() {
    let arr = [];
    for(let i = 0; i <= 48; i++) {
      arr.push(<Storycard  />);
    }
    return (
      <div id="Home">
        <Storycard type="main" />
        {arr}
      </div>
    )
  }
}

module.exports = Home;
