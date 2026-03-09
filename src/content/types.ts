export type Locale = 'en' | 'uk';
export type ThemeMode = 'system' | 'light' | 'dark';

export interface HeaderLabels {
  language: string;
  english: string;
  ukrainian: string;
  theme: string;
  light: string;
  dark: string;
  downloadPdf: string;
}

export interface SectionLabels {
  contacts: string;
  technologies: string;
  experience: string;
  projects: string;
  education: string;
  softSkills: string;
  languages: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  start: string;
  end?: string | null;
  highlights: string[];
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface ProjectEntry {
  title: string;
  summary: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface CVProfile {
  fullName: string;
  title: string;
  summary: string;
  location: string;
  photoAlt: string;
}

export interface CVDocument {
  locale: Locale;
  labels: HeaderLabels & SectionLabels;
  profile: CVProfile;
  contacts: ContactLink[];
  technologies: SkillGroup[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  softSkills: string[];
  languages: LanguageEntry[];
}
