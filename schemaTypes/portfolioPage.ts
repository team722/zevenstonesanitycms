import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',
  fields: [
    defineField({ name: 'hero', title: 'Portfolio Page Hero', type: 'heroSection' }),
    defineField({ name: 'likeWhatYouSeeCta', title: 'Like What You See CTA', type: 'ctaSection' }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
