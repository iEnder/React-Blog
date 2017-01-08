const React = require('react');

/*
  Nav Bar
*/

class Navbar extends React.Component {
  render() {
    return (
      <div id="Navbar">
        <span>
          <i className="fa fa-bars"></i>
        </span>
        <ul>
          <li>Sign In</li>
        </ul>
        <Navmenu />
      </div>
    )
  }
}


/*
  Nav Menu
*/

class Navmenu extends React.Component {
  render() {
     return (
       <div>
         <div id="Navmenu">
           <div className="menu-header">
             <i className="fa fa-close"></i>
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
         <div id="navDim"></div>
       </div>
     )
  }
}

module.exports = Navbar;
