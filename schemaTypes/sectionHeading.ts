import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sectionHeading',
  title: 'Section Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
