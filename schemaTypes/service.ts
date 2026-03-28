import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'details', title: 'Service Detail Points', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'image', title: 'Service Image', type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'isFeatured', title: 'Show in Homepage Grid?', type: 'boolean', initialValue: false }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description', media: 'image' },
  },
});
