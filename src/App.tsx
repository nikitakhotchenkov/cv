import { useEffect, useMemo, useState } from 'react';
import { getCV } from './content';
import type { Locale, ThemeMode } from './content/types';
import { buildPdfFilename, formatDateRange } from './lib/dateRange';

const LOCALE_STORAGE_KEY = 'cv.locale';
const THEME_STORAGE_KEY = 'cv.theme';

function readInitialLocale(): Locale {
  const langParam = new URLSearchParams(window.location.search).get('lang');
  if (langParam === 'en' || langParam === 'uk') {
    return langParam;
  }

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === 'en' || stored === 'uk') {
    return stored;
  }

  return 'en';
}

function readInitialTheme(): ThemeMode {
  const themeParam = new URLSearchParams(window.location.search).get('theme');
  if (themeParam === 'light' || themeParam === 'dark') {
    return themeParam;
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }

  return 'system';
}

function App() {
  const [locale, setLocale] = useState<Locale>(() => readInitialLocale());
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => readInitialTheme());
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  const isPdfExport = useMemo(() => new URLSearchParams(window.location.search).get('export') === 'pdf', []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => setSystemPrefersDark(event.matches);

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const resolvedTheme = themeMode === 'system' ? (systemPrefersDark ? 'dark' : 'light') : themeMode;
  const effectiveTheme = isPdfExport ? 'light' : resolvedTheme;

  useEffect(() => {
    document.documentElement.dataset.theme = effectiveTheme;
    document.documentElement.dataset.export = isPdfExport ? 'pdf' : 'screen';
  }, [effectiveTheme, isPdfExport]);

  const cv = useMemo(() => getCV(locale), [locale]);
  const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;
  const pdfHref = `${import.meta.env.BASE_URL}${buildPdfFilename(locale)}`;

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLocale);
    window.history.replaceState({}, '', `${url.pathname}${url.search}`);
  };

  const handleThemeChange = (nextTheme: Extract<ThemeMode, 'light' | 'dark'>) => {
    setThemeMode(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <main className={`page-shell${isPdfExport ? ' export-mode' : ''}`}>
      <div className="shape-overlay" aria-hidden="true" />
      <article className="cv-page">
        <header className="card hero animate-rise">
          <div className="identity">
            <img className="photo" src={profileImage} alt={cv.profile.photoAlt} />
            <div>
              <p className="location">{cv.profile.location}</p>
              <h1>{cv.profile.fullName}</h1>
              <p className="role">{cv.profile.title}</p>
            </div>
          </div>
          <div className="controls no-print">
            <div className="control-row">
              <span>{cv.labels.language}</span>
              <div className="toggle">
                <button
                  type="button"
                  className={locale === 'en' ? 'active' : ''}
                  onClick={() => handleLocaleChange('en')}
                >
                  {cv.labels.english}
                </button>
                <button
                  type="button"
                  className={locale === 'uk' ? 'active' : ''}
                  onClick={() => handleLocaleChange('uk')}
                >
                  {cv.labels.ukrainian}
                </button>
              </div>
            </div>
            <div className="control-row">
              <span>{cv.labels.theme}</span>
              <div className="toggle">
                <button
                  type="button"
                  className={effectiveTheme === 'light' ? 'active' : ''}
                  onClick={() => handleThemeChange('light')}
                >
                  {cv.labels.light}
                </button>
                <button
                  type="button"
                  className={effectiveTheme === 'dark' ? 'active' : ''}
                  onClick={() => handleThemeChange('dark')}
                >
                  {cv.labels.dark}
                </button>
              </div>
            </div>
            <a className="pdf-button" href={pdfHref} target="_blank" rel="noreferrer">
              {cv.labels.downloadPdf}
            </a>
          </div>
        </header>

        <div className="cv-grid">
          <aside className="left-col">
            <section className="card animate-rise delay-2">
              <h2>{cv.labels.contacts}</h2>
              <ul className="simple-list">
                {cv.contacts.map((contact) => (
                  <li key={contact.label}>
                    <span>{contact.label}</span>
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {contact.value}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card animate-rise delay-3">
              <h2>{cv.labels.softSkills}</h2>
              <ul className="simple-list soft-skill-list">
                {cv.softSkills.map((item) => (
                  <li key={item}>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card animate-rise delay-4">
              <h2>{cv.labels.languages}</h2>
              <ul className="simple-list languages">
                {cv.languages.map((language) => (
                  <li key={language.name}>
                    <span>{language.name}</span>
                    <strong>{language.level}</strong>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          <div className="right-col">
            <section className="card summary animate-rise delay-1">
              <p>{cv.profile.summary}</p>
            </section>

            <section className="card animate-rise delay-2">
              <h2>{cv.labels.technologies}</h2>
              <div className="groups">
                {cv.technologies.map((group) => (
                  <div key={group.title} className="group">
                    <h3>{group.title}</h3>
                    <ul className="chip-row">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="card animate-rise delay-3">
              <h2>{cv.labels.experience}</h2>
              <div className="timeline">
                {cv.experience.map((entry) => (
                  <article key={`${entry.company}-${entry.start}`}>
                    <div className="timeline-head">
                      <h3>{entry.role}</h3>
                      <p>{formatDateRange(locale, entry.start, entry.end)}</p>
                    </div>
                    <p className="company">
                      {entry.company} | {entry.location}
                    </p>
                    <ul>
                      {entry.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="card animate-rise delay-4">
              <h2>{cv.labels.projects}</h2>
              <ul className="projects-list">
                {cv.projects.map((project) => (
                  <li key={project.title}>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card animate-rise delay-4">
              <h2>{cv.labels.education}</h2>
              <ul className="education-list">
                {cv.education.map((item) => (
                  <li key={`${item.degree}-${item.period}`}>
                    <div className="timeline-head">
                      <h3>{item.degree}</h3>
                      <p>{item.period}</p>
                    </div>
                    <p className="company">
                      {item.institution} | {item.location}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
