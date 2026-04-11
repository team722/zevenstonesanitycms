import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'successStoriesPage',
  title: 'Success Stories Page',
  type: 'document',
  fields: [
    defineField({ name: 'hero', title: 'Success Stories Hero', type: 'heroSection' }),
    defineField({ name: 'readyToWriteCta', title: 'Ready to Write CTA', type: 'ctaSection' }),
    defineField({ name: 'storiesHeading', title: 'Stories Section Heading', type: 'sectionHeading' }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
