import './CSS/navbar.css';
import MenuImage from '../assets/Menu.png'; 
import LogoImage from '../assets/logo.png'; 
import { NavLink } from "react-router-dom";

export function Navbar() {
  const getNavColor = ({isActive}) => {
    return {
      color: isActive ? '#FF6C2D' : 'white',
    };
  };

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="brand-name">
          <span className='logo-image'><img src={LogoImage} alt="" /></span>  
          Bespoke
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink 
                className='link-style' 
                to="/" 
                style={getNavColor}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                className='link-style' 
                to="/service" 
                style={getNavColor}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/portfolio' 
                className='link-style'
                style={getNavColor}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink 
                className='link-style' 
                to="/contactus"
                style={getNavColor}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
