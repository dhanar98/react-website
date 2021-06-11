import '../css/NavBar.css';
import logo from '../logo.svg';
const NavBar = (props) => {
    return(
     <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
           <img src={logo} alt="logo"/>
           <span>logo</span>
       </a>
       <nav id="navbar" className="navbar">
           <ul>
               {
                 props.navbar.map((navitem) => {
                     const {NavName,NavLink} = navitem;
                     return(
                        <li className ="nav-link"href={NavLink}>
                            {NavName}
                        </li>
                     );
                 })
               }
           </ul>
           <i className="ri-align-right mobile-nav-toggle"></i>
       </nav>
     </div>
    );
}
export default NavBar;
