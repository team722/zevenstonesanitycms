import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
