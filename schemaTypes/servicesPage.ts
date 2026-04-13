import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({ name: 'hero', title: 'Services Page Hero', type: 'heroSection' }),
    defineField({ name: 'notSureWhereToStartCta', title: 'Not Sure Where to Start CTA', type: 'ctaSection' }),
    // defineField({ name: 'featuresHeading', title: 'Features/Services Heading', type: 'sectionHeading' }),
    defineField({ name: 'techStackHeading', title: 'Tech Stack Heading', type: 'sectionHeading' }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
