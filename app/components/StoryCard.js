const React = require('react');

class Storycard extends React.Component {
  render() {
    return (
      <div className={`storyCard ${this.props.type == "main" ? "cardMain" : "cardNorm"}`}>
        <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=&w=520&h=120" alt="#"/>
        <span className="storyButton" ><i className="fa fa-arrow-right"></i></span>
        <div>
          <p>Nullam euismod laoreet auctor</p>
          <span><i className="fa fa-ellipsis-v"></i></span>
        </div>
      </div>
    )
  }
}

module.exports = Storycard;
