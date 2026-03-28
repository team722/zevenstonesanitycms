import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
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
  ],
});
