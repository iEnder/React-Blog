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
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    console.log("Bye!");
  }
  render() {
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
                  <li>
                    <a href="#">
                      <i className="fa fa-home"></i><span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-fire"></i><span>Hot</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-book"></i><span>Stories</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-github"></i><span>Github</span></a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-info-circle"></i><span>About</span></a>
                      </li>
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
