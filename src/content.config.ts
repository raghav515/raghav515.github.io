import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    venue: z.string().optional(),
    period: z.string().optional(),
    role: z.string().optional(),
    team: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    gallery: z
      .array(z.object({ src: z.string(), caption: z.string().optional() }))
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    date: z.coerce.date().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const journey = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journey' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    period: z.string().optional(),
    location: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog, journey };
