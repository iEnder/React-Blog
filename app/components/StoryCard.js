const React = require('react');
const CSSTransisitionGroup = require('react-addons-css-transition-group');

class Storycard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socialOpen: false
    }

    this.toggleSocial = this.toggleSocial.bind(this);
  }

  toggleSocial() {
    this.state.socialOpen = !this.state.socialOpen;
    this.setState({
      socialOpen: this.state.socialOpen
    });
  }

  render() {
    return (
      <div className={`storyCard ${this.props.type == "main" ? "cardMain" : "cardNorm"}`}>
        <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=&w=520&h=120" alt="#"/>
        <span className="storyButton" ><i className="fa fa-arrow-right"></i></span>
        <div>
          <p>Nullam euismod laoreet auctor</p>
          <span><i onClick={this.toggleSocial} className="fa fa-ellipsis-v"></i></span>
        </div>
        <CSSTransisitionGroup
          transitionName="openSocial"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
          transitionAppearTimeout={400}
          transitionAppear={true}>
          {this.state.socialOpen ?
            <div className="shareSocialPopup" onClick={this.toggleSocial}>
              <p>Share this story:</p>
              <span>
                <a href="#"><i className="fa fa-google-plus"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-envelope-o"></i></a>
              </span>
            </div>
            : null}
          </CSSTransisitionGroup>
        </div>
      )
    }
  }

  module.exports = Storycard;
