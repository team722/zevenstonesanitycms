import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'heroMedia', title: 'Hero & Media' },
    { name: 'visionFounder', title: 'Vision & Founder' },
    { name: 'servicesProcess', title: 'Services & Process' },
    { name: 'whyUsStats', title: 'Why Us & Stats' },
    { name: 'socialProof', title: 'Social Proof' },
    { name: 'contactFaq', title: 'Contact & FAQ' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'hero', title: 'Home Page Hero', type: 'heroSection', group: 'heroMedia' }),
    defineField({
      name: 'visionSection', title: 'Your Vision Section', type: 'object', group: 'visionFounder',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'smallHeading', title: 'Small Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Button Text', type: 'string' }),
            defineField({ name: 'url', title: 'Button URL', type: 'string' }),
          ],
        }),
      ]
    }),
    defineField({
      name: 'showcaseVideo',
      title: 'Showcase Video (MP4)',
      type: 'file',
      group: 'heroMedia',
      options: {
        accept: 'video/mp4'
      }
    }),
    defineField({ name: 'servicesHeading', title: 'Our Services Heading', type: 'sectionHeading', group: 'servicesProcess' }),
    defineField({ name: 'testimonialsHeading', title: 'What Our Clients Say Heading', type: 'sectionHeading', group: 'socialProof' }),
    defineField({ name: 'whyChooseUsHeading', title: 'Why Choose Us Heading', type: 'sectionHeading', group: 'whyUsStats' }),
    defineField({
      name: 'partnersHeading', title: 'Partners Heading', type: 'object', group: 'socialProof',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
      ]
    }),
    defineField({ name: 'portfolioHeading', title: 'Portfolio Heading', type: 'sectionHeading', group: 'socialProof' }),
    defineField({ name: 'faqHeading', title: 'FAQ Heading', type: 'sectionHeading', group: 'contactFaq' }),
    defineField({
      name: 'contactFormSection', title: 'Contact Form Section', type: 'object', group: 'contactFaq',
      fields: [
        defineField({ name: 'heading', title: 'Form Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Form Description', type: 'text' }),
      ]
    }),
    defineField({
      name: 'stats', title: 'Stats Section', type: 'array', group: 'whyUsStats',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', title: 'Value (e.g. 500+)', type: 'string' }),
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'whyUsItems', title: 'Why Us Section', type: 'array', group: 'whyUsStats',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Title', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({
      name: 'processSteps', title: 'Process Steps', type: 'array', group: 'servicesProcess',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Step Title', type: 'string' }),
          defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({
      name: 'founderMessages', title: 'Founder Messages Section', type: 'array', group: 'visionFounder',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Section Title', type: 'string' }),
          defineField({ name: 'content', title: 'Message Content', type: 'text', rows: 5 }),
          defineField({ name: 'author', title: 'Author Name', type: 'string' }),
          defineField({ name: 'role', title: 'Author Role', type: 'string' }),
          defineField({ name: 'photo', title: 'Author Photo', type: 'image', options: { hotspot: true } }),
        ],
      }],
    }),
    defineField({
      name: 'moreServicesTags', title: 'More Services Tags', type: 'array', group: 'servicesProcess',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields', group: 'seo' }),
  ],
});
