import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/utils';

export type Project = {
  slug: string; // folder name, used in the URL
  lang: Lang;   // file name (pt / fr / en)
  entry: CollectionEntry<'projects'>;
};

// Entry ids look like "my-game/en": folder = project slug, file = site language
export async function getProjects(lang?: Lang): Promise<Project[]> {
  const entries = await getCollection('projects');
  return entries
    .map((entry) => {
      const [slug, fileLang] = entry.id.split('/');
      return { slug, lang: fileLang as Lang, entry };
    })
    .filter((p) => !lang || p.lang === lang)
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}
