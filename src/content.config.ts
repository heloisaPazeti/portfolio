import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One folder per project, one file per site language: my-game/pt.md, fr.md, en.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(['c', 'cpp', 'csharp']), // programming language (menu category)
    order: z.number().default(0),             // position in the carousel
    cover: z.string().optional(),             // path inside public/, e.g. "/projects/my-game/cover.png"
    tech: z.array(z.string()).default([]),
    repo: z.string().url(),
    demo: z.string().url().optional(),
  }),
});

// "About me" text: one file per site language (pt.md, fr.md, en.md)
const about = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects, about };
