import { HiArrowRight } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => (
  <footer id="contact" className="footer">
    <div className="footer__top">
      <p className="section__kicker">Contact</p>
      <h2>Have a role, project<br />or good idea? <em>Let&apos;s talk.</em></h2>
      <a href="mailto:onlyonewsd@icloud.com">
        onlyonewsd@icloud.com <HiArrowRight aria-hidden="true" />
      </a>
    </div>

    <div className="footer__bottom">
      <p>Harry Wang · Frontend Developer · Australia</p>
      <a href="https://github.com/TinyRattleSnake" target="_blank" rel="noreferrer">
        <AiFillGithub aria-hidden="true" /> GitHub <span className="sr-only">(opens in a new tab)</span>
      </a>
      <p>© {new Date().getFullYear()} Harry Wang</p>
    </div>
  </footer>
);

export default Footer;
