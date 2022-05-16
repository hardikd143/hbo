import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.scss";
import { sublinks, socialLink } from "../data/data";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-primary">
        <div className="container-xxl">
          <div className="row justify-content-lg-between">
            <div className="col-lg-3 fp-left col-md-4 col-sm-6  col-12">
              <p className="cName">HBO Private Limited</p>
              <p className="cAddress">
                2nd Floor, #36/5, Hustlehub One East, Somasandrapalya, 27th Main
                road, Sector 2, HSR Layout, Bengaluru, Karnataka - 560102
              </p>
              <div className="footer-social-wrapper">
                {
                  socialLink.map((item,index)=>{
                    // return <a href="#" key={index} className={`socialIcon ${item.label}`}>{item.icon}</a>
                    return <Link to={'/'} key={index} className={`socialIcon ${item.label}`}>{item.icon}</Link>
                  })
                }
              </div>
            </div>
            <div className="col-lg-4 fp-right col-md-8 col-sm-6 col-12 ">
              <div className="row ">
                {sublinks.map((item, index) => {
                  return (
                    <div
                      className={`${item.page} col-6 linkWrapper`}
                      key={index}
                    >
                      <p className="fTitle">{item.page}</p>
                      <ul>
                        {item.links.map((item, index) => {
                          return (
                            <li key={index}>
                              <Link to={item.url}>{item.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-secondary ">
        <div className="inner container-xxl">
          <div className="footer-info">
            <span>CIN: U66000KA2016PLC138288</span>
            <span>IRDAI Registration No: 157</span>
            <span>Category: Non-Life Insurance</span>
          </div>
          <div className="footer-content">
            <p>
              The use of images and brands are only for the purpose of
              indication and illustration. ACKO claims no rights on the IP
              rights of any third parties. The ratings are derived from reviews
              and feedback received from Google and Facebook users on their
              respective platforms. | *Savings of upto Rs. 50,000 have been
              calculated on the IDV of Rs. 18,00,000 and 0% NCB. Amount saved is
              in comparison to tariff rates. Product name: Private Car Policy -
              Bundled | UIN: IRDAN157RP0014V01201819 |
            </p>
            <p>
              Trade logo displayed above belongs to ACKO Technology & Services
              Pvt Ltd and used by ACKO General insurance Limited under License.
              For more details on risk factors, terms, conditions and
              exclusions, please read the policy wordings carefully before
              concluding a sale.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
