import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    // ─── Blog Listing Hero ────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Blog Page Hero',
      type: 'heroSection',
    }),

    // ─── Stay Ahead CTA (bottom of listing page) ─────────────────────────────
    defineField({
      name: 'stayAheadCta',
      title: 'Stay Ahead CTA',
      type: 'ctaSection',
    }),

    // ─── Default CTA Banner (shown on all blog posts unless overridden) ───────
    defineField({
      name: 'defaultCtaBanner',
      title: 'Default CTA Banner',
      type: 'object',
      description:
        'Shown at the bottom of every blog post. Individual posts can override this with their own CTA Banner field.',
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
          rows: 2,
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'buttonUrl',
          title: 'Button URL',
          type: 'string',
        }),
      ],
    }),

    // ─── Newsletter Section ───────────────────────────────────────────────────
    defineField({
      name: 'newsletterSection',
      title: 'Newsletter Section',
      type: 'object',
      description: 'Displayed at the bottom of every blog post below the related posts grid.',
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
          rows: 2,
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'placeholder',
          title: 'Input Placeholder',
          type: 'string',
        }),
      ],
    }),

    // ─── SEO ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoFields',
    }),
  ],
});
