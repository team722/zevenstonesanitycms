import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'hero', title: 'Home Page Hero', type: 'heroSection' }),
    defineField({
      name: 'visionSection', title: 'Your Vision Section', type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
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
    defineField({ name: 'servicesHeading', title: 'Our Services Heading', type: 'sectionHeading' }),
    defineField({ name: 'testimonialsHeading', title: 'What Our Clients Say Heading', type: 'sectionHeading' }),
    defineField({ name: 'whyChooseUsHeading', title: 'Why Choose Us Heading', type: 'sectionHeading' }),
    defineField({
      name: 'partnersHeading', title: 'Partners Heading', type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
      ]
    }),
    defineField({ name: 'portfolioHeading', title: 'Portfolio Heading', type: 'sectionHeading' }),
    defineField({ name: 'faqHeading', title: 'FAQ Heading', type: 'sectionHeading' }),
    defineField({
      name: 'contactFormSection', title: 'Contact Form Section', type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Form Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Form Description', type: 'text' }),
      ]
    }),
    defineField({
      name: 'stats', title: 'Stats Section', type: 'array',
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
      name: 'whyUsItems', title: 'Why Us Section', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Title', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({
      name: 'processSteps', title: 'Process Steps', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Step Title', type: 'string' }),
          defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({
      name: 'founderMessage', title: 'Founder Message Section', type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'content', title: 'Message Content', type: 'text', rows: 5 }),
        defineField({ name: 'author', title: 'Author Name', type: 'string' }),
        defineField({ name: 'role', title: 'Author Role', type: 'string' }),
        defineField({ name: 'photo', title: 'Author Photo', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'moreServicesTags', title: 'More Services Tags', type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
