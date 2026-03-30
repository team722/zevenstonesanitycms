import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo', title: 'SEO Settings', type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
        defineField({ name: 'ogImage', title: 'Social Share Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
});
