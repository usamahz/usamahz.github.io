import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    url: z.string(),
    badge: z.string().optional(),
    featured: z.boolean().optional(),
});

const researchProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    url: z.string(),
    badge: z.string().optional(),
    featured: z.boolean().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;
export type ResearchProjectSchema = z.infer<typeof researchProjectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const projectCollection = defineCollection({ schema: projectSchema });
const researchProjectCollection = defineCollection({ schema: researchProjectSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'projects': projectCollection,
    'research-projects': researchProjectCollection
}