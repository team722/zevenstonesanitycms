import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'client', maxLength: 96 },
    }),
    defineField({
      name: 'image', title: 'Hero Image', type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'challenge', title: 'The Challenge', type: 'text', rows: 3 }),
    defineField({ name: 'solution', title: 'Our Solution', type: 'text', rows: 3 }),
    defineField({ name: 'impact', title: 'The Impact / Result', type: 'text', rows: 2 }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'keyResults',
      title: 'Key Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 300%)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'servicesProvided',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'processImages',
      title: 'Process / Context Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'solutionFeatures',
      title: 'Solution Details/Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
  preview: {
    select: { title: 'client', subtitle: 'headline', media: 'image' },
  },
});
