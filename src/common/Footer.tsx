import { Link } from 'react-router-dom';
import { footerHomeLinks } from '../data/nav.data';
import { CALENDLY, COPYRIGHT_TEXT } from '../utils/constants/constants';

interface Props {
  suffix?: string;
}

export function Footer({ suffix }: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/assets/icons/logo-wand-footer.svg" alt="" />
              MagicMond{suffix ? <>&nbsp;<span className="font-normal">{suffix}</span></> : null}
            </div>
            <p className="footer__tagline">Let's create magic together! 🪄</p>
            <p className="footer__social-title">Our Social Handles</p>
            <div className="footer__social">
              <a href="https://www.linkedin.com/company/magicmondglobal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/assets/icons/social-linkedin.svg" alt="" /></a>
              <a href="https://www.instagram.com/reidiusinfra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="/assets/icons/social-instagram.svg" alt="" /></a>
            </div>
            <p className="footer__copy">{COPYRIGHT_TEXT}</p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <p className="footer__col-title">Home</p>
              <ul>
                {footerHomeLinks.map((l) => (
                  <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <p className="footer__col-title">Contact</p>
              <ul>
                <li><a href={CALENDLY}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__wordmark">magicmond</div>
      </div>
    </footer>
  );
}
export default Footer;
