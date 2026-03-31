import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
