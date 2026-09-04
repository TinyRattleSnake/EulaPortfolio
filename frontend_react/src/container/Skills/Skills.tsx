import { motion } from 'framer-motion';
import { skillGroups, timeline } from '../../data/portfolio';
import './Skills.scss';

const Skills = () => (
  <section id="skills" className="section skills" aria-labelledby="skills-title">
    <div className="section__intro section__intro--row">
      <div>
        <p className="section__kicker">Skills & growth</p>
        <h2 id="skills-title">A practical toolkit,<br /><em>always improving.</em></h2>
      </div>
      <p className="section__aside">My toolkit combines frontend fundamentals, practical engineering workflows and modern web technologies.</p>
    </div>

    <div className="skills__grid">
      <div className="skills__groups">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <h3>{group.title}</h3>
            <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </motion.article>
        ))}
      </div>

      <div className="skills__timeline" aria-label="Development timeline">
        {timeline.map((item) => (
          <article key={item.period}>
            <span>{item.period}</span>
            <div><h3>{item.title}</h3><p>{item.detail}</p></div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
