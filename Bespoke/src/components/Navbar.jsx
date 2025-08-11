import './CSS/navbar.css'
import MenuImage from '../assets/Menu.png'; 
import LogoImage from '../assets/logo.png'; 
import { ProductDesign } from './ProductDesign';
export function Navbar(){
    return(
<div className="nav-container">
    <div className="nav">
<div className="brand-name">
  <span className='logo-image'><img src={LogoImage} alt="" /></span>  Bespoke
</div>
<div className="menu">
    MENU <span><img src={MenuImage} alt="" /></span>
</div>
    </div>
<ProductDesign/>
</div>

    );
}