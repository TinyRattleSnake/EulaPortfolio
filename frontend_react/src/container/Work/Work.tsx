import { useMemo, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { projects, type ProjectCategory } from '../../data/portfolio';
import './Work.scss';

type Filter = 'All' | ProjectCategory;

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', 'Frontend', 'CMS'];
  const visibleProjects = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="section__intro section__intro--row">
        <div>
          <p className="section__kicker">Selected work</p>
          <h2 id="work-title">Proof of <em>how I think.</em></h2>
        </div>
        <p className="section__aside">A selection of frontend and content platform work, including the goals, approach and technologies behind each project.</p>
      </div>

      <div className="work__filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="work__list" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <motion.article
            className="project"
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="project__visual" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{project.category}</strong>
              <div>{project.tags.slice(0, 3).map((tag) => <i key={tag}>{tag}</i>)}</div>
            </div>

            <div className="project__content">
              <div className="project__meta"><span>{project.eyebrow}</span><span>{project.year}</span></div>
              <h3>{project.title}</h3>
              <p className="project__summary">{project.summary}</p>
              <dl>
                <div><dt>Challenge</dt><dd>{project.challenge}</dd></div>
                <div><dt>Approach</dt><dd>{project.solution}</dd></div>
              </dl>
              <ul aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <a href={project.href} target="_blank" rel="noreferrer">
                View project on GitHub <HiArrowRight aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Work;
