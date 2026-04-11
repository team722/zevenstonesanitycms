import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    defineField({ name: 'hero', title: 'Blog Page Hero', type: 'heroSection' }),
    defineField({ name: 'stayAheadCta', title: 'Stay Ahead CTA', type: 'ctaSection' }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
