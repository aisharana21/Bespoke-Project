import './CSS/navbar.css'
import MenuImage from '../assets/Menu.png'; 
export function Navbar(){
    return(
<div className="nav-container">
    <div className="nav">
<div className="brand-name">
    Bespoke
</div>
<div className="menu">
    Menu <span><img src={MenuImage} alt="" /></span>
</div>
    </div>

</div>

    );
}