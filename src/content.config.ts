import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const livros = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/livros' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    author: z.string(),
    description: z.string(),
    cover: z.string(),
    category: z.string(),
    status: z.enum(['publicado', 'em-producao', 'planejado']).default('publicado'),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    accent: z.string().default('sage')
  })
});

const capitulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/capitulos' }),
  schema: z.object({
    bookSlug: z.string(),
    number: z.number().int().positive(),
    title: z.string(),
    slug: z.string(),
    kicker: z.string(),
    summary: z.string(),
    keyIdeas: z.array(z.object({
      title: z.string(),
      text: z.string()
    })),
    applications: z.array(z.object({
      title: z.string(),
      text: z.string()
    })),
    mapImage: z.string().optional(),
    videoUrl: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { livros, capitulos };
