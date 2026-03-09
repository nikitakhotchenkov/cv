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
    title: 'Backend Developer (Python / JavaScript / Java)',
    location: 'Kyiv, Ukraine',
    photoAlt: 'Nikita Khotchenkov profile photo',
    summary:
      'Backend developer focused on ERP-integrated APIs, fiscalization services, and event-driven platforms with production delivery on Linux server infrastructure.',
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
      value: 'nikita-khotchenkov-12477599',
      href: 'https://linkedin.com/in/nikita-khotchenkov-12477599',
    },
    {
      label: 'GitHub',
      value: 'github.com/nikitakhotchenkov',
      href: 'https://github.com/nikitakhotchenkov',
    },
  ],
  technologies: [
    {
      title: 'Programming & Frameworks',
      items: ['Python 3', 'Java', 'FastAPI', 'Flask', 'Django', 'JavaScript', 'Frappe'],
    },
    {
      title: 'Databases & Storage',
      items: ['PostgreSQL / TimeScaleDB', 'MySQL / MariaDB', 'SQLite', 'Oracle', 'MongoDB', 'Redis'],
    },
    {
      title: 'APIs & Integrations',
      items: ['REST API', 'WebSocket API', 'gRPC', 'IT-Enterprise ERP API', 'Software cash register (PRRO) API'],
    },
    {
      title: 'Async, Messaging & Infrastructure',
      items: [
        'Kafka',
        'Celery',
        'RabbitMQ',
        'Linux',
        'Nginx (reverse proxy/load balancing)',
        'Docker',
        'Supervisor/systemd',
        'CI/CD pipelines',
        'VPS administration',
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
      title: 'National Program Integrations',
      summary:
        'Delivered secure backend integrations for national initiatives, handling high-volume recipient data and large-scale logistics coordination.',
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
