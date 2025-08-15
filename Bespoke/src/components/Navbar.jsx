import './CSS/navbar.css'
import MenuImage from '../assets/Menu.png'; 
import LogoImage from '../assets/logo.png'; 
// import { ProductDesign } from './ProductDesign';
import { Service } from './Service';
import { ContactUs } from './ContactUs';
import { Portfolio } from './Portfolio';
import { Link, Links } from 'react-router-dom';
export function Navbar(){
    return(
<div className="nav-container">
    <div className="nav">
<div className="brand-name">
  <span className='logo-image'><img src={LogoImage} alt="" /></span>  Bespoke
</div>
<div className="menu">
<ul>

    <li>
      <Link className='link-style' to="/">Home</Link>  </li>
    <li><Link className='link-style' to ="/service"> Services </Link></li>
    <li><Link to ='/portfolio' className='link-style'>Portfolio</Link></li>
<li><Link className='link-style' to ="/contactus"> Contact Us </Link></li>
</ul>
    {/* MENU <span><img src={MenuImage} alt="" /></span> */}
</div>
    </div>
</div>

    );
}