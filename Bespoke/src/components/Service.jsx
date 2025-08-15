import './CSS/service.css'
import WomenImage from '../assets/women.png'; 
import { ServiceOverview } from './ServiceOverview';
import { ServiceOverviewCard } from './ServiceOverviewCard';
import { DetailServiceOverview } from './DetailServiceOverview';
import { ChooseBespoke } from './ChooseBespoke';
import { ServiceCTA } from './ServiceCTA';
export function Service (){
    return(
        <div className="service-container">
<div className="hero-section">
<div className="section-description">
<div className="section-heading">
    <h2>We Create Designs That Connect <span className='highlight'>Emotionally</span> </h2>
</div>
<div className="section-subheading">From idea to execution, Bespoke delivers innovative and impactful design solutions that inspire and engage.
</div>
<div className="view-work">
    <button className='view-work-button'>View Our Work</button>
</div>
</div>
<div className="section-img">
    <img src={WomenImage} alt="" />
</div>
</div>
<ServiceOverview/>
<ServiceOverviewCard/>
<DetailServiceOverview/>
<ChooseBespoke/>
<ServiceCTA/>
</div>

    );
}