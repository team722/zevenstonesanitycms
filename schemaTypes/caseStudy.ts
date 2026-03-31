import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({
      name: 'image', title: 'Hero Image', type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'challenge', title: 'The Challenge', type: 'text', rows: 3 }),
    defineField({ name: 'solution', title: 'Our Solution', type: 'text', rows: 3 }),
    defineField({ name: 'impact', title: 'The Impact / Result', type: 'text', rows: 2 }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
  preview: {
    select: { title: 'client', subtitle: 'headline', media: 'image' },
  },
});
