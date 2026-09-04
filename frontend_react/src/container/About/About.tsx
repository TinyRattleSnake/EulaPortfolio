import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import './About.scss';

const principles = [
  ['01', 'Clear before clever', 'Interfaces should explain themselves. I start with hierarchy, semantics and the user’s next action.'],
  ['02', 'Responsive by default', 'Layouts, touch targets and content are considered across phones, tablets and desktops from the start.'],
  ['03', 'Built to maintain', 'Strong types, small components and documented decisions make future changes safer and faster.'],
] as const;

const About = () => (
  <section id="about" className="section about" aria-labelledby="about-title">
    <div className="section__intro">
      <p className="section__kicker">About</p>
      <h2 id="about-title">I turn ideas into <em>working software.</em></h2>
    </div>

    <div className="about__body">
      <div className="about__statement">
        <p>
          I&apos;m a frontend-focused developer based in Australia. My strength is taking an idea,
          breaking it into understandable pieces and steadily turning it into a polished web experience.
        </p>
        <p>
          I care about accessible interactions, responsive layouts and maintainable components. I enjoy
          working through practical problems and creating interfaces that are straightforward to use.
        </p>
        <a href="#work">Explore projects <HiArrowDown aria-hidden="true" /></a>
      </div>

      <div className="about__principles">
        {principles.map(([number, title, text], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <span>{number}</span>
            <div><h3>{title}</h3><p>{text}</p></div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
