import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'hero', title: 'About Page Hero', type: 'heroSection' }),
    defineField({
      name: 'visionAndMission', title: 'Vision and Mission Section', type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({
          name: 'content', title: 'Content', type: 'array',
          of: [{ type: 'block' }] // Portable text
        }),
      ]
    }),
    defineField({ name: 'howWeWorkHeading', title: 'How We Work Heading', type: 'sectionHeading' }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
