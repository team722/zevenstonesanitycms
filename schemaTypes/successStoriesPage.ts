import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'successStoriesPage',
  title: 'Success Stories Page',
  type: 'document',
  fields: [
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
