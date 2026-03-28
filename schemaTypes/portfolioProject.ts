import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'headline', title: 'Project Headline', type: 'string' }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: ['Digital Marketing', 'Web / Apps', 'Video Production', 'AI'] },
    }),
    defineField({
      name: 'image', title: 'Project Image', type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'client', subtitle: 'headline', media: 'image' },
  },
});
