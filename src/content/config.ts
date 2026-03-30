import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    affiliateId: z.string(),
    category: z.string(),
    brand: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    excerpt: z.string(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    location: z.string(),
    season: z.enum(['spring', 'summer', 'fall', 'winter', 'year-round']),
    activities: z.array(z.string()),
  }),
});

const comparisons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    affiliateIds: z.array(z.string()),
    category: z.string(),
  }),
});

export const collections = { reviews, guides, comparisons };
