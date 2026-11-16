export const languages = ['pt', 'fr', 'en'] as const;
export type Lang = (typeof languages)[number];

// Texts shown to visitors, one block per site language
export const ui = {
  pt: {
    about: 'Sobre mim',
    projects: 'Projetos',
    language: 'Idioma',
    role: 'Desenvolvedor de software',
    description: 'Portfólio de projetos de programação.',
    back: 'Voltar',
    noProjects: 'Ainda não há projetos nesta linguagem.',
    prev: 'Projeto anterior',
    next: 'Próximo projeto',
    code: 'Código',
    demo: 'Demo',
  },
  fr: {
    about: 'À propos',
    projects: 'Projets',
    language: 'Langue',
    role: 'Développeur logiciel',
    description: 'Portfolio de projets de programmation.',
    back: 'Retour',
    noProjects: "Pas encore de projets dans ce langage.",
    prev: 'Projet précédent',
    next: 'Projet suivant',
    code: 'Code',
    demo: 'Démo',
  },
  en: {
    about: 'About me',
    projects: 'Projects',
    language: 'Language',
    role: 'Software developer',
    description: 'Programming projects portfolio.',
    back: 'Back',
    noProjects: 'No projects in this language yet.',
    prev: 'Previous project',
    next: 'Next project',
    code: 'Code',
    demo: 'Demo',
  },
} satisfies Record<Lang, Record<string, string>>;
// Prepends the repository base path (e.g. "/portfolio") to a path starting with "/"
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

// "/portfolio/fr/projects/cpp/" -> "/projects/cpp/"
// Used by the language switcher to link to the same page in another language
export function stripLang(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return rest.replace(/^\/(pt|fr|en)(?=\/|$)/, '') || '/';
}
