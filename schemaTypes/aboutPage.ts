import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'hero', title: 'About Page Hero', type: 'heroSection' }),
    defineField({
      name: 'heroImages',
      title: 'Hero Images (For the grid in hero section)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({ name: 'visionSection', title: 'Vision Section', type: 'sectionHeading' }),
    defineField({ name: 'missionSection', title: 'Mission Section', type: 'sectionHeading' }),
    defineField({ name: 'howWeWorkHeading', title: 'How We Work Heading', type: 'sectionHeading' }),
    defineField({ name: 'coreValuesHeading', title: 'Core Values Heading', type: 'sectionHeading' }),
    defineField({ name: 'foundersBioHeading', title: 'Founders Bio Heading', type: 'sectionHeading' }),
    defineField({ name: 'teamHeading', title: 'Team Section Heading', type: 'sectionHeading' }),
    defineField({ name: 'testimonialsHeading', title: 'Testimonials Heading', type: 'sectionHeading' }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
