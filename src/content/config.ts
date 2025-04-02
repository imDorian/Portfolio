import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        tecnologies: z.array(z.string()),
        link: z.string().url(),  // Debe ser una URL válida
        images: z.array(z.string()).optional(), // Opcional, puede no estar presente
    }),
});

export const collections = {
    projects: projectsCollection,
};
