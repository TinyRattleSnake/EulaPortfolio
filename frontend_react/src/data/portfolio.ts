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
    title: 'Developer Portfolio',
    eyebrow: 'Personal project · Frontend',
    year: '2026',
    category: 'Frontend',
    summary: 'A responsive personal portfolio designed to present projects, technical skills and professional information clearly.',
    challenge: 'Present varied information in a focused experience that works well across devices and remains easy to maintain.',
    solution: 'Built a typed component system with responsive layouts, accessible controls, project filtering and automated quality checks.',
    tags: ['React', 'TypeScript', 'Vite', 'Accessibility'],
    href: 'https://github.com/TinyRattleSnake/HarryWang',
  },
  {
    title: 'Portfolio Content Studio',
    eyebrow: 'Content platform · CMS',
    year: '2024',
    category: 'CMS',
    summary: 'A structured content workspace for managing portfolio projects, skills, experience and contact information.',
    challenge: 'Portfolio content needed to be editable without changing component code every time.',
    solution: 'Designed reusable Sanity schemas and connected them to React views through GROQ queries and a consistent content model.',
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
    title: 'Additional tools',
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
    title: 'React + Sanity content platform',
    detail: 'Developed a responsive React interface supported by structured content models and reusable components.',
  },
  {
    period: 'Foundation',
    title: 'Web development fundamentals',
    detail: 'Built a strong foundation in JavaScript, semantic HTML, CSS, Git and modern web development practices.',
  },
] as const;
