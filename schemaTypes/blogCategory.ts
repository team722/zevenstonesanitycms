import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Display Label',
      type: 'string',
      description: 'e.g. "Strategy", "Design", "Technology"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'value',
      title: 'Filter Value',
      type: 'string',
      description: 'Internal value, generally same as the Label.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'value' },
  },
});
