import type { CVDocument } from './types';

export const cvEn: CVDocument = {
  locale: 'en',
  labels: {
    language: 'Language',
    english: 'English',
    ukrainian: 'Ukrainian',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    downloadPdf: 'Download PDF',
    contacts: 'Contacts',
    technologies: 'Technologies',
    experience: 'Work Experience',
    projects: 'Projects',
    education: 'Education',
    softSkills: 'Soft Skills',
    languages: 'Languages',
  },
  profile: {
    fullName: 'Nikita Khotchenkov',
    title: 'Backend / Full-stack Developer (Python / React / TypeScript)',
    location: 'Kyiv, Ukraine',
    photoAlt: 'Nikita Khotchenkov profile photo',
    summary:
      'Backend and full-stack developer building ERP-integrated, event-driven, and financial analytics systems with Python/Django, React/TypeScript, PostgreSQL, and production Linux infrastructure.',
  },
  contacts: [
    { label: 'Phone', value: '+38 066 202 98 58', href: 'tel:+380662029858' },
    {
      label: 'Email',
      value: 'nikita.khotchenkov@gmail.com',
      href: 'mailto:nikita.khotchenkov@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'nikita-khotchenkov',
      href: 'https://linkedin.com/in/nikita-khotchenkov',
    },
    {
      label: 'GitHub',
      value: 'github.com/nikitakhotchenkov',
      href: 'https://github.com/nikitakhotchenkov',
    },
  ],
  technologies: [
    {
      title: 'Backend',
      items: ['Python 3', 'Java', 'C#', 'Django / DRF', 'FastAPI', 'Flask', 'Frappe'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Flutter', 'Dart', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'Apache ECharts'],
    },
    {
      title: 'Data & Storage',
      items: [
        'PostgreSQL / TimescaleDB',
        'MySQL / MariaDB',
        'Oracle',
        'MongoDB',
        'Firebase',
        'Redis',
        'SQL',
        'pandas',
        'Excel / ETL',
        'openpyxl / XlsxWriter',
      ],
    },
    {
      title: 'APIs & Infrastructure',
      items: [
        'REST API',
        'WebSocket API',
        'gRPC',
        'Kafka',
        'Celery',
        'RabbitMQ',
        'Linux',
        'Nginx',
        'Docker',
        'CI/CD',
      ],
    },
  ],
  experience: [
    {
      company: 'JSC Ukrposhta',
      role: 'Software Developer',
      location: 'Kyiv, Ukraine',
      start: '2023-03',
      end: null,
      highlights: [
        'Designed backend flows for e-commerce orders and customer lifecycle with IT-Enterprise ERP API integrations.',
        'Built a Java REST extension for an existing .jar-based Software cash register (PRRO) component used for Posmark online-order fiscalization.',
        'Implemented event-driven fiscalization services using Kafka, Celery, Redis, and PostgreSQL; handled Linux deployment, Nginx balancing, and CI/CD delivery.',
      ],
    },
    {
      company: 'Fintech Startup',
      role: 'Software Engineer',
      location: 'Kyiv, Ukraine',
      start: '2019-10',
      end: '2023-03',
      highlights: [
        'Built automated trading systems on Binance REST/WebSocket APIs using asyncio, SQLAlchemy, pandas, and numpy.',
        'Developed Telegram alert automation and maintained VPS-hosted services with production Linux administration.',
      ],
    },
  ],
  projects: [
    {
      title: 'E-commerce & Order Management',
      summary:
        'Designed backend systems supporting full order and customer lifecycle for national-scale e-commerce platforms, including ERP integrations and shipment automation.',
    },
    {
      title: 'Fiscalization & Payment Orchestration',
      summary:
        'Implemented online/offline fiscalization and receipt lifecycle processing via PRRO services with event-driven pipelines on Kafka, Celery, Redis, and PostgreSQL.',
    },
    {
      title: 'Logistics & Warehouse Systems',
      summary:
        'Designed WMS and pickup/drop-off management services to automate inventory accounting, cargo lifecycle tracking, and customer verification workflows.',
    },
    {
      title: 'Reportarium — Financial Reporting & Analytics',
      summary:
        'Built a full-stack platform for PJSC Ukrnafta that imports, validates, normalizes, and versions evolving Excel financial reports, with interactive ECharts dashboards for cash flow, receivables, promissory notes, and inventory.',
    },
  ],
  education: [
    {
      degree: 'Bachelor Degree in International Economic Relations',
      institution: 'Institute of International Relations (IIR), Taras Shevchenko State University',
      location: 'Kyiv, Ukraine',
      period: '2009-2013',
    },
    {
      degree: 'MBA, Global Banking and Finance',
      institution: 'European University Business School',
      location: 'Geneva, Switzerland',
      period: '2013-2015',
    },
  ],
  softSkills: ['Analytical', 'Collaborative', 'Solution-driven', 'Business-minded', 'Supportive team mentor'],
  languages: [
    { name: 'Ukrainian', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Russian', level: 'Fluent' },
  ],
};
