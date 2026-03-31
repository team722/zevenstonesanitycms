import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',
  fields: [
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
