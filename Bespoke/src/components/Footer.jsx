import './CSS/footer.css'
import LogoImage from '../assets/logo-black.png'; 
import InstagramLogo from '../assets/instagram.png'; 
import FacebookLogo from '../assets/facebook.png'; 
import LinkedInLogo from '../assets/LinkedInLogo.png'; 
import YoutubeLogo from '../assets/YoutubeLogo.png'; 
import XLogo from '../assets/XLogo.png'; 

export function Footer(){
    return (<div className="footer-container">
<div className="footer-logo-container">
<div className="logo-name">
    <span className='logo-image-black'><img src={LogoImage} alt="" /></span>Bespoke
</div>

<div className="social-links-container"><div className="follow-instruction">
    Follow us
</div>
<div className="social-links">
<img src={FacebookLogo} alt="" />
<img src={InstagramLogo} alt="" />
<img src={LinkedInLogo} alt="" />
<img src={YoutubeLogo} alt="" />
<img src={XLogo} alt="" />
</div></div>

</div>
<div className="footer-links-container">
<div className="footer-link">
    <div className="footer-link-heading">
     <h3>Heading Text</h3>
    </div>
    <div className="link-list">
        <ul>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
        </ul>
    </div>
</div>
<div className="footer-link">
    <div className="footer-link-heading">
       <h3>Heading Text</h3>
    </div>
    <div className="link-list">
        <ul>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
        </ul>
    </div>
</div>
<div className="footer-link">
    <div className="footer-link-heading">
   <h3>Heading Text</h3>
    </div>
    <div className="link-list">
        <ul>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
        </ul>
    </div>
</div>
<div className="footer-link">
    <div className="footer-link-heading">
<h3>Heading Text</h3>    </div>
    <div className="link-list">
        <ul>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
            <li>Link Text Here</li>
        </ul>
    </div>
</div>
</div>
    </div>

    ) ;  
}