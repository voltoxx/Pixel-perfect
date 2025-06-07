import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        date: z.date(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const services = defineCollection({
    loader: file("src/content/services/services.json"),
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
        features: z.array(z.string()).optional(),
    }),
});

const technologies = defineCollection({
    loader: file("src/content/technologies/technologies.json"),
    schema: z.object({
        id: z.number(),
        name: z.string(),
        icon: z.string(),
    }),
});

export const collections = {
    blog,
    services,
    technologies,
};