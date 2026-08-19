import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'successStoriesPage',
  title: 'Success Stories Page',
  type: 'document',
  groups: [
    { name: 'heroCta', title: 'Hero & CTA' },
    { name: 'content', title: 'Stories Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'hero', title: 'Success Stories Hero', type: 'heroSection', group: 'heroCta' }),
    defineField({ name: 'readyToWriteCta', title: 'Ready to Write CTA', type: 'ctaSection', group: 'heroCta' }),
    defineField({ name: 'storiesHeading', title: 'Stories Section Heading', type: 'sectionHeading', group: 'content' }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields', group: 'seo' }),
  ],
});
