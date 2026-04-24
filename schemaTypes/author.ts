import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ 
      name: 'name', 
      title: 'Full Name', 
      type: 'string', 
      validation: (r) => r.required() 
    }),
    defineField({ 
      name: 'role', 
      title: 'Job Title / Role', 
      type: 'string' 
    }),
    defineField({
      name: 'photo', 
      title: 'Profile Photo', 
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ 
      name: 'bio', 
      title: 'Short Bio', 
      type: 'text', 
      rows: 3 
    }),
    defineField({ name: 'linkedIn', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'twitter', title: 'Twitter / X URL', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});
