import { Link } from 'react-router-dom';
import { CALENDLY } from '../../../utils/constants/constants';

export function FooterSection() {
  return (
    <footer className="c-footer" id="about-us">
      <div className="container">
        <div className="c-footer__grid">
          <div>
            <p className="c-footer__brand-name"><img src="/assets/icons/logo-wand.svg" alt="" />MagicMond Global</p>
            <p className="c-footer__tagline">Your Growth Partner</p>
          </div>
          <div className="c-footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="#offerings">0 to 1 Building</a></li>
              <li><Link to="/#service">Growth Marketing</Link></li>
            </ul>
          </div>
          <div className="c-footer__col">
            <h4>Growth Stories</h4>
            <ul>
              <li><Link to="/case-srudy-2-AV">AstroVedansh</Link></li>
              <li><Link to="/Case-study-ri">Reidius Infra</Link></li>
              <li><Link to="/Case-study-1-sm">Shoemonkies</Link></li>
            </ul>
          </div>
          <div className="c-footer__col">
            <h4>Connect</h4>
            <ul>
              <li><a href={CALENDLY}>Contact Us</a></li>
              <li><a href={CALENDLY}>Connect on Whatsapp</a></li>
              <li><Link to="/#about">About Us</Link></li>
            </ul>
          </div>
          <div className="c-footer__col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#offerings">Terms &amp; Conditions</a></li>
              <li><a href="#offerings">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FooterSection;
