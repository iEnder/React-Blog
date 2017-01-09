const React = require('react');
const CSSTransisitionGroup = require('react-addons-css-transition-group');

/*
Nav Bar
*/

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    this.state.menuActive = !this.state.menuActive;
    this.setState({
      menuActive: this.state.menuActive
    });
  }

  render() {
    return (
      <div id="Navbar">
        <span>
          <i className="fa fa-bars" onClick={this.toggleMenu}></i>
        </span>
        <ul>
          <li>Sign In</li>
        </ul>
        <Navmenu closeMenu={this.toggleMenu} active={this.state.menuActive}/>
      </div>
    )
  }
}


/*
Nav Menu
*/

class Navmenu extends React.Component {
  render() {

    const menuItems = {
      home: ["#", "home", "Home"],
      popularStories: ["#", "fire", "Hot"],
      allStories: ["#", "book", "Stories"],
      github: ["#", "github", "Github"],
      aboutPage: ["#", "info-circle", "About"],
    };

    return (
      <div>
        <CSSTransisitionGroup
          transitionName="menuSlide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}
          transitionAppear={true}
          component="div"
          >
            {this.props.active ?
              <div id="Navmenu">
                <div className="menu-header">
                  <i className="fa fa-close" onClick={this.props.closeMenu}></i>
                  <span>React Blog</span>
                </div>
                <ul>
                  {
                    Object.keys(menuItems).map(function(item, index) {
                      let [url, icon, text] = menuItems[item];
                      return (
                        <li key={`menuItem-${index}`}>
                          <a href={ url }>
                            <i className={ `fa fa-${ icon }` }></i>
                            <span>{ text }</span>
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              : null
            }
          </CSSTransisitionGroup>
          <CSSTransisitionGroup
            transitionName="navScreenDim"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={300}
            transitionAppearTimeout={200}
            transitionAppear={true}
            component="div">
            {this.props.active ? <div id="navDim" onClick={this.props.closeMenu}></div> : null}
          </CSSTransisitionGroup>
        </div>
      )
    }
  }

  module.exports = Navbar;
