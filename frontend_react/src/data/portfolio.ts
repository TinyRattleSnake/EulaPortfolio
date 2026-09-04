export type ProjectCategory = 'Frontend' | 'CMS';

export interface Project {
  title: string;
  eyebrow: string;
  year: string;
  category: ProjectCategory;
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  href: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Refresh',
    eyebrow: 'Personal product · Frontend',
    year: '2026',
    category: 'Frontend',
    summary: 'A tutorial-based portfolio rebuilt into a secure, typed and accessible product for the Australian job market.',
    challenge: 'The original site relied on remote CMS data, exposed a browser token and showed empty sections when requests failed.',
    solution: 'Reframed the content around recruiter needs, moved essential data local, added semantic controls and introduced repeatable quality checks.',
    tags: ['React', 'TypeScript', 'Vite', 'Accessibility'],
    href: 'https://github.com/TinyRattleSnake/HarryWang',
  },
  {
    title: 'Sanity Content Studio',
    eyebrow: 'CMS prototype · Content modelling',
    year: '2024',
    category: 'CMS',
    summary: 'A structured content workspace for portfolio projects, skills, experience, testimonials and contact enquiries.',
    challenge: 'Portfolio content needed to be editable without changing component code every time.',
    solution: 'Designed reusable Sanity schemas and connected typed React views while learning where a CMS adds value—and where it adds unnecessary complexity.',
    tags: ['Sanity', 'GROQ', 'Schema design', 'React'],
    href: 'https://github.com/TinyRattleSnake/HarryWang/tree/main/backend_sanity',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS / Sass', 'Vite'],
  },
  {
    title: 'Engineering',
    skills: ['Git & GitHub', 'Responsive UI', 'Accessibility', 'REST APIs', 'Component testing', 'CI-ready workflows'],
  },
  {
    title: 'Exploring',
    skills: ['Node.js', 'Sanity CMS', 'GraphQL', 'Cloud deployment', 'Performance optimisation'],
  },
] as const;

export const timeline = [
  {
    period: 'Now',
    title: 'Building production-ready frontend work',
    detail: 'Focused on React, TypeScript, testing and accessible product experiences for opportunities in Australia.',
  },
  {
    period: '2024',
    title: 'First React + Sanity portfolio',
    detail: 'Built a responsive portfolio from a long-form course, then extended it with TypeScript and custom content.',
  },
  {
    period: 'Foundation',
    title: 'Web development fundamentals',
    detail: 'JavaScript, semantic HTML, CSS, Git and the habit of learning by shipping complete projects.',
  },
] as const;
