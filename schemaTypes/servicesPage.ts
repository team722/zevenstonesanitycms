import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  groups: [
    { name: 'heroCta', title: 'Hero & CTA' },
    { name: 'pillars', title: 'Service Pillars' },
    { name: 'services', title: 'Services Grid' },
    { name: 'processTech', title: 'Process & Tech Stack' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ─── Existing ───────────────────────────────────────────────────────────
    defineField({ name: 'hero', title: 'Services Page Hero', type: 'heroSection', group: 'heroCta' }),
    defineField({ name: 'notSureWhereToStartCta', title: 'Not Sure Where to Start CTA', type: 'ctaSection', group: 'heroCta' }),
    defineField({ name: 'pillarsHeading', title: 'Three Pillars Heading', type: 'sectionHeading', group: 'pillars' }),
    defineField({ name: 'servicesGridHeading', title: 'Services Grid Heading', type: 'sectionHeading', group: 'services' }),
    defineField({ name: 'techStackHeading', title: 'Tech Stack Heading', type: 'sectionHeading', group: 'processTech' }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      description: 'The steps of your process specifically for the Services page.',
      type: 'array',
      group: 'processTech',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Step Title', type: 'string' }),
          defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({
      name: 'pillars',
      title: 'Three Pillars',
      description: 'The three core service pillars displayed on the Services page.',
      type: 'array',
      group: 'pillars',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'pillarNumber', title: 'Pillar Label (e.g. Pillar 1 — Create)', type: 'string' }),
          defineField({ name: 'title', title: 'Title', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          defineField({ 
            name: 'capabilities', 
            title: 'Capabilities', 
            type: 'array', 
            of: [{ type: 'string' }] 
          }),
        ],
      }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields', group: 'seo' }),
  ],
});
