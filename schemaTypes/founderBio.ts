import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'founderBio',
  title: 'Founder Bio',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Job Title / Role', type: 'string' }),
    defineField({
      name: 'photo', title: 'Profile Photo', type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', description: 'e.g. Building with purpose' }),
    defineField({ name: 'quoteText', title: 'Quote Text', type: 'text', rows: 3 }),
    defineField({ name: 'theStory', title: 'The Story', type: 'text', rows: 4 }),
    defineField({ name: 'theJourney', title: 'The Journey', type: 'text', rows: 4 }),
    defineField({ name: 'theVision', title: 'The Vision', type: 'text', rows: 4 }),
    defineField({ name: 'notableAchievements', title: 'Notable Achievements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'beyondWork', title: 'Beyond Work', type: 'text', rows: 4 }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});
