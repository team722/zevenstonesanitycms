import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'author', title: 'Author Name', type: 'string' }),
    defineField({ name: 'role', title: 'Author Role / Title', type: 'string' }),
    defineField({ name: 'company', title: 'Company Name', type: 'string' }),
    defineField({
      name: 'photo', title: 'Author Photo', type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'author', subtitle: 'company', media: 'photo' },
  },
});
