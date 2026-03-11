import type { CVDocument } from './types';

export const cvUk: CVDocument = {
  locale: 'uk',
  labels: {
    language: 'Мова',
    english: 'Англійська',
    ukrainian: 'Українська',
    theme: 'Тема',
    light: 'Світла',
    dark: 'Темна',
    downloadPdf: 'Завантажити PDF',
    contacts: 'Контакти',
    technologies: 'Технології',
    experience: 'Досвід роботи',
    projects: 'Проєкти',
    education: 'Освіта',
    softSkills: 'Мʼякі навички',
    languages: 'Мови',
  },
  profile: {
    fullName: 'Нікіта Хотченков',
    title: 'Backend Developer (Python / JavaScript / Java)',
    location: 'Київ, Україна',
    photoAlt: 'Фото профілю Нікіти Хотченкова',
    summary:
      'Backend-розробник із фокусом на ERP-інтегровані API, сервіси фіскалізації та event-driven платформи з продакшн-доставкою на Linux-інфраструктурі.',
  },
  contacts: [
    { label: 'Телефон', value: '+38 066 202 98 58', href: 'tel:+380662029858' },
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
      title: 'Мови та фреймворки',
      items: ['Python 3', 'Java', 'FastAPI', 'Flask', 'Django', 'JavaScript', 'Frappe'],
    },
    {
      title: 'Бази даних та сховища',
      items: ['PostgreSQL / TimeScaleDB', 'MySQL / MariaDB', 'SQLite', 'Oracle', 'MongoDB', 'Redis'],
    },
    {
      title: 'API та інтеграції',
      items: ['REST API', 'WebSocket API', 'gRPC', 'API ERP IT-Enterprise', 'API програмного РРО (PRRO)'],
    },
    {
      title: 'Асинхронність, messaging та інфраструктура',
      items: [
        'Kafka',
        'Celery',
        'RabbitMQ',
        'Linux',
        'Nginx (reverse proxy/load balancing)',
        'Docker',
        'Supervisor/systemd',
        'CI/CD pipelines',
        'VPS-адміністрування',
      ],
    },
  ],
  experience: [
    {
      company: 'АТ Укрпошта',
      role: 'Software Developer',
      location: 'Київ, Україна',
      start: '2023-03',
      end: null,
      highlights: [
        'Спроєктував backend-потоки для e-commerce замовлень і життєвого циклу клієнтів з інтеграціями до API ERP IT-Enterprise.',
        'Розробив Java REST-розширення для наявного .jar-компонента програмного РРО (PRRO), який використовується для фіскалізації онлайн-замовлень Posmark.',
        'Реалізував event-driven сервіси фіскалізації на Kafka, Celery, Redis і PostgreSQL; виконував Linux-розгортання, балансування через Nginx та доставку через CI/CD.',
      ],
    },
    {
      company: 'Fintech Startup',
      role: 'Software Engineer',
      location: 'Київ, Україна',
      start: '2019-10',
      end: '2023-03',
      highlights: [
        'Побудував автоматизовані торгові системи на Binance REST/WebSocket API з використанням asyncio, SQLAlchemy, pandas і numpy.',
        'Розробив Telegram-автоматизацію алертів та підтримував VPS-сервіси з продакшн Linux-адмініструванням.',
      ],
    },
  ],
  projects: [
    {
      title: 'E-commerce та керування замовленнями',
      summary:
        'Спроєктував backend-системи повного життєвого циклу замовлень і клієнтів для національних e-commerce платформ, включно з ERP-інтеграціями та автоматизацією відправлень.',
    },
    {
      title: 'Фіскалізація та платіжна оркестрація',
      summary:
        'Реалізував онлайн/офлайн фіскалізацію та обробку життєвого циклу чеків через сервіси PRRO з event-driven пайплайнами на Kafka, Celery, Redis і PostgreSQL.',
    },
    {
      title: 'Логістичні та складські системи',
      summary:
        'Розробив WMS і сервіси для пунктів видачі/прийому, що автоматизують облік запасів, керування життєвим циклом вантажів і верифікацію клієнтів.',
    },
    {
      title: 'Інтеграції з національними програмами',
      summary:
        'Впровадив безпечні backend-інтеграції для національних ініціатив із обробкою великих масивів отримувачів і масштабною логістичною координацією.',
    },
  ],
  education: [
    {
      degree: 'Бакалавр міжнародних економічних відносин',
      institution: 'Інститут міжнародних відносин (ІМВ), Київський національний університет імені Тараса Шевченка',
      location: 'Київ, Україна',
      period: '2009-2013',
    },
    {
      degree: 'MBA, Global Banking and Finance',
      institution: 'European University Business School',
      location: 'Женева, Швейцарія',
      period: '2013-2015',
    },
  ],
  softSkills: [
    'Аналітичність',
    'Командна взаємодія',
    'Орієнтація на рішення',
    'Бізнес-орієнтованість',
    'Менторська підтримка команди',
  ],
  languages: [
    { name: 'Українська', level: 'Рідна' },
    { name: 'Англійська', level: 'Вільно' },
    { name: 'Російська', level: 'Вільно' },
  ],
};
