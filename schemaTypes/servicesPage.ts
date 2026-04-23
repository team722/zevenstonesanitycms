import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // ─── Existing ───────────────────────────────────────────────────────────
    defineField({ name: 'hero', title: 'Services Page Hero', type: 'heroSection' }),
    defineField({ name: 'notSureWhereToStartCta', title: 'Not Sure Where to Start CTA', type: 'ctaSection' }),
    defineField({ name: 'pillarsHeading', title: 'Three Pillars Heading', type: 'sectionHeading' }),
    defineField({ name: 'servicesGridHeading', title: 'Services Grid Heading', type: 'sectionHeading' }),
    defineField({ name: 'techStackHeading', title: 'Tech Stack Heading', type: 'sectionHeading' }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      description: 'The steps of your process specifically for the Services page.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Step Title', type: 'string' }),
          defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
