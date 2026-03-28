import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioCategory',
  title: 'Portfolio Category',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Display Label (shown on the tab button)',
      type: 'string',
      description: 'e.g. "Digital Marketing", "Web / Apps", "Video Production"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'value',
      title: 'Filter Value (must match the category field on Portfolio Projects exactly)',
      type: 'string',
      description: 'e.g. "Digital Marketing" — must be identical to what you set in the Portfolio Project category field.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order (1 = first tab after "All")',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'value' },
  },
});
