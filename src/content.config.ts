import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chapterOutlineItem = z.object({
  number: z.number().int().positive(),
  title: z.string()
});

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
    updatedAt: z.coerce.date().optional(),
    accent: z.string().default('sage'),
    totalChapters: z.number().int().positive(),
    chapterOutline: z.array(chapterOutlineItem).default([]),
    affiliateUrl: z.string().url().optional(),
    affiliateLabel: z.string().default('Ver o livro'),
    specialVideos: z.array(z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      url: z.string().url(),
      label: z.string().default('Assistir no YouTube')
    })).default([])
  })
});

const conceptItem = z.object({
  label: z.string().optional(),
  title: z.string(),
  text: z.string()
});

const capitulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/capitulos' }),
  schema: z.object({
    bookSlug: z.string(),
    number: z.number().int().positive(),
    title: z.string(),
    slug: z.string(),
    kicker: z.string(),
    takeaway: z.string(),
    summary: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    readingMinutes: z.number().int().positive().default(8),
    concept: z.object({
      eyebrow: z.string().default('Conceito central'),
      title: z.string(),
      description: z.string().optional(),
      layout: z.enum(['flow', 'cards']).default('flow'),
      items: z.array(conceptItem).min(1)
    }).optional(),
    keyIdeas: z.array(z.object({
      title: z.string(),
      text: z.string()
    })).default([]),
    caseStudy: z.object({
      eyebrow: z.string().default('Exemplo para enxergar a ideia'),
      title: z.string(),
      text: z.string()
    }).optional(),
    whyItMatters: z.object({
      title: z.string(),
      text: z.string()
    }).optional(),
    bookConnection: z.object({
      title: z.string(),
      text: z.string()
    }).optional(),
    applications: z.array(z.object({
      title: z.string(),
      text: z.string()
    })).default([]),
    mapImage: z.string().optional(),
    mapAlt: z.string().optional(),
    mapCaption: z.string().optional(),
    mapDownloadUrl: z.string().optional(),
    premiumUrl: z.string().url().optional(),
    premiumLabel: z.string().optional(),
    videoUrl: z.string().url().optional(),
    videoTitle: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { livros, capitulos };
