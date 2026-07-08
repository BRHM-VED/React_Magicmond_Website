import { Link } from 'react-router-dom';
import { CALENDLY } from '../../../utils/constants/constants';

export function FooterSection() {
  return (
    <footer className="bg-[#05020b] border-t border-white/[0.08] py-[70px] pb-[50px] text-white" id="about-us">
      <div className="container px-5 md:px-10 mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <p className="font-inter font-semibold text-[20px] flex items-center gap-2">
              <img className="w-[26px] h-[26px]" src="/assets/icons/logo-wand.svg" alt="" />
              MagicMond Global
            </p>
            <p className="mt-2.5 text-[15px] text-white/60">Your Growth Partner</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-[16px] text-[#d86cff]">Services</h4>
            <ul className="mt-4 grid gap-2.5">
              <li><a className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" href="#offerings">0 to 1 Building</a></li>
              <li><Link className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" to="/#service">Growth Marketing</Link></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-[16px] text-[#d86cff]">Growth Stories</h4>
            <ul className="mt-4 grid gap-2.5">
              <li><Link className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" to="/case-study-astrovedansh">AstroVedansh</Link></li>
              <li><Link className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" to="/Case-study-ri">Reidius Infra</Link></li>
              <li><Link className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" to="/Case-study-1-sm">Shoemonkies</Link></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-[16px] text-[#d86cff]">Connect</h4>
            <ul className="mt-4 grid gap-2.5">
              <li><a className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" href={CALENDLY}>Contact Us</a></li>
              <li><a className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" href={CALENDLY}>Connect on Whatsapp</a></li>
              <li><Link className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" to="/#about">About Us</Link></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-[16px] text-[#d86cff]">Legal</h4>
            <ul className="mt-4 grid gap-2.5">
              <li><a className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" href="#offerings">Terms &amp; Conditions</a></li>
              <li><a className="text-[15px] text-white/75 hover:text-white transition-colors duration-200" href="#offerings">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
