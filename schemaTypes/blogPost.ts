import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug', title: 'URL Slug', type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'author', title: 'Author', type: 'reference', to: [{ type: 'teamMember' }]
    }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: { list: ['Strategy', 'Design', 'Growth', 'Marketing', 'Technology', 'AI'] },
    }),
    defineField({ name: 'publishedAt', title: 'Published Date', type: 'datetime' }),
    defineField({ name: 'excerpt', title: 'Excerpt / Summary', type: 'text', rows: 3 }),
    defineField({
      name: 'mainImage', title: 'Featured Image', type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({
      name: 'body', title: 'Article Body', type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        { type: 'code' },
      ],
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
    defineField({ name: 'featured', title: 'Featured Post?', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage', subtitle: 'category' },
  },
});
