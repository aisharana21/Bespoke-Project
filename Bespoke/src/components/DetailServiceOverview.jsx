import './CSS/detail-service-overview.css';
import './CSS/DefaultStyle/card.css';
import BrandIdentityMocking from '../assets/productdesignbranding.jpg';
import BrandingMocking from '../assets/brandingmockup.jpg';
import UIdesign from '../assets/uidesign.jpg';

export function DetailServiceOverview() {
  const detailServiceData = [
    {
      image: BrandIdentityMocking,
      name: "Product Design",
      heading:
        "We transform your concepts into functional, high-quality designs through research, 3D modeling, and prototyping."
    },
    {
      image: BrandingMocking,
      name: "Brand Identity",
      heading:
        "From color palettes to typography, we build a consistent visual language that strengthens your brand's presence."
    },
    {
      image: UIdesign,
      name: "UX/UI Design",
      heading:
        " We merge design aesthetics with functionality to craft memorable digital experiences."
    }
  ];

  return (
    <div className="detail-service-overview-container">
      <div className="detail-service-overview card-detail-conatainer">
        {detailServiceData.map((data, index) => (
          <div key={index} className="service-detail card-detail">
           
            {index % 2 === 0 ? (
              <>
                <div className="service-img card-img">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="service-detail-description card-detail-description">
                  <div className="service-heading card-heading">
                    <h2>{data.name}</h2>
                  </div>
                  <div className="service-subheading card-subheading">{data.heading}</div>
                </div>
              </>
            ) : (
              <>
                <div className="service-detail-description card-description">
                  <div className="service-heading card-heading">
                    <h2>{data.name}</h2>
                  </div>
                  <div className="service-subheading card-subheading">{data.heading}</div>
                </div>
                <div className="service-img card-img">
                  <img src={data.image} alt={data.name} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
