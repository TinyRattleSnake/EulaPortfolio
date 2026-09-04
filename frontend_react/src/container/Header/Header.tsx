import { HiArrowDown, HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <header id="home" className="hero">
    <motion.div
      className="hero__copy"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="hero__eyebrow"><span /> Open to opportunities in Australia</p>
      <h1>
        Frontend developer.<br />
        <em>Thoughtful</em> interfaces.<br />
        Reliable code.
      </h1>
      <p className="hero__intro">
        I&apos;m Harry Wang, a React and TypeScript developer focused on accessible,
        responsive web experiences that feel clear and purposeful.
      </p>
      <div className="hero__actions">
        <a className="button button--primary" href="#work">
          View selected work <HiArrowDown aria-hidden="true" />
        </a>
        <a className="button button--text" href="mailto:onlyonewsd@icloud.com">
          Email me <HiArrowRight aria-hidden="true" />
        </a>
      </div>
    </motion.div>

    <motion.div
      className="hero__portrait"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
    >
      <div className="hero__image-frame">
        <img src={images.profile} alt="Harry Wang" />
      </div>
      <div className="hero__stack" aria-label="Core technologies">
        <span>React</span><span>TypeScript</span><span>Vite</span>
      </div>
      <p className="hero__caption">Based in Australia · Available for frontend and full-stack roles</p>
    </motion.div>
  </header>
);

export default Header;
