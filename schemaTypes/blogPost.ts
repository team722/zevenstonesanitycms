import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // ─── Core Fields ─────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'blogCategory' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      description: 'Estimated read time in minutes. Displayed in the article header.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post?',
      type: 'boolean',
      initialValue: false,
    }),

    // ─── Table of Contents ────────────────────────────────────────────────────
    defineField({
      name: 'showTableOfContents',
      title: 'Show Table of Contents',
      type: 'boolean',
      initialValue: true,
      description: 'Displays a sticky sidebar on desktop and a collapsible drawer on mobile.',
    }),

    // ─── Article Body ─────────────────────────────────────────────────────────
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [
        // Standard rich text block
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({ name: 'href', title: 'URL', type: 'url' }),
                  defineField({
                    name: 'blank',
                    title: 'Open in new tab',
                    type: 'boolean',
                    initialValue: true,
                  }),
                ],
              },
            ],
          },
        },
        // ── Comparison Table ────────────────────────────────────────────────
        {
          type: 'object',
          name: 'comparisonTable',
          title: 'Comparison Table',
          fields: [
            defineField({
              name: 'title',
              title: 'Table Title',
              type: 'string',
            }),
            defineField({
              name: 'headers',
              title: 'Column Headers',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Labels for the top row (e.g., Feature, Plan A, Plan B)',
              validation: (Rule) => Rule.min(2),
            }),
            defineField({
              name: 'rows',
              title: 'Table Rows',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'feature', title: 'Feature/Row Name', type: 'string' }),
                    defineField({
                      name: 'values',
                      title: 'Values',
                      type: 'array',
                      of: [{ type: 'string' }],
                      description: 'The values corresponding to each header column (after the feature name).',
                    }),
                    defineField({
                      name: 'isCheckmark',
                      title: 'Treat as Checkmarks?',
                      type: 'array',
                      of: [{ type: 'boolean' }],
                      description: 'If true, "yes/no/true/false" text will be replaced with icons.',
                    }),
                  ],
                  preview: {
                    select: { title: 'feature' },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { title: 'title', rows: 'rows' },
            prepare({ title, rows }) {
              return {
                title: `📊 Comparison Table: ${title || 'Untitled'}`,
                subtitle: `${rows?.length || 0} rows`,
              };
            },
          },
        },

        // Inline image with alt + caption
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        },

        // Code block
        { type: 'code' },

        // ── Statistics Strip ────────────────────────────────────────────────
        {
          type: 'object',
          name: 'statsStrip',
          title: 'Statistics Strip',
          fields: [
            defineField({
              name: 'stats',
              title: 'Statistics',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'value', title: 'Value (e.g. 340%)', type: 'string' }),
                    defineField({ name: 'label', title: 'Label (e.g. Traffic Increase)', type: 'string' }),
                  ],
                  preview: {
                    select: { title: 'value', subtitle: 'label' },
                  },
                },
              ],
              validation: (r) => r.min(1).max(6),
            }),
          ],
          preview: {
            select: { title: 'stats[0].value', subtitle: 'stats[1].value' },
            prepare({ title, subtitle }) {
              return { title: `📊 Stats Strip: ${title || ''}${subtitle ? ` • ${subtitle}` : ''}` };
            },
          },
        },

        // ── Callout / Tip Box ────────────────────────────────────────────────
        {
          type: 'object',
          name: 'calloutBox',
          title: 'Callout / Tip Box',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: '💡 Tip', value: 'tip' },
                  { title: 'ℹ️ Info', value: 'info' },
                  { title: '⚠️ Warning', value: 'warning' },
                  { title: '📝 Note', value: 'note' },
                ],
                layout: 'radio',
              },
              initialValue: 'tip',
            }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'type' },
            prepare({ title, subtitle }) {
              const icons: Record<string, string> = { tip: '💡', info: 'ℹ️', warning: '⚠️', note: '📝' };
              return { title: `${icons[subtitle] || '📝'} ${title || 'Callout Box'}`, subtitle };
            },
          },
        },

        // ── Steps / Process Block ────────────────────────────────────────────
        {
          type: 'object',
          name: 'stepsBlock',
          title: 'Steps / Process',
          fields: [
            defineField({
              name: 'heading',
              title: 'Section Heading',
              type: 'string',
            }),
            defineField({
              name: 'steps',
              title: 'Steps',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'title', title: 'Step Title', type: 'string' }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 3,
                    }),
                    defineField({
                      name: 'icon',
                      title: 'Icon (optional)',
                      type: 'image',
                      options: { hotspot: true },
                    }),
                  ],
                  preview: {
                    select: { title: 'title', subtitle: 'description' },
                  },
                },
              ],
              validation: (r) => r.min(1),
            }),
          ],
          preview: {
            select: { title: 'heading' },
            prepare({ title }) {
              return { title: `🪜 Steps: ${title || 'Untitled'}` };
            },
          },
        },

        // ── Pull Quote ───────────────────────────────────────────────────────
        {
          type: 'object',
          name: 'pullQuote',
          title: 'Pull Quote',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 3,
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'attribution',
              title: 'Attribution (Name)',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role / Title',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'quote', subtitle: 'attribution' },
            prepare({ title, subtitle }) {
              return { title: `❝ ${title?.slice(0, 60) || 'Pull Quote'}`, subtitle };
            },
          },
        },

        // ── Pros & Cons Block ────────────────────────────────────────────────
        {
          type: 'object',
          name: 'prosConsBlock',
          title: 'Pros & Cons',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading (optional)',
              type: 'string',
            }),
            defineField({
              name: 'pros',
              title: 'Pros ✅',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'cons',
              title: 'Cons ❌',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: { title: 'heading', pros: 'pros', cons: 'cons' },
            prepare({ title, pros, cons }) {
              return {
                title: `⚖️ ${title || 'Pros & Cons'}`,
                subtitle: `${pros?.length || 0} pros · ${cons?.length || 0} cons`,
              };
            },
          },
        },
      ],
    }),

    // ─── CTA Banner (Per-Post Override) ───────────────────────────────────────
    defineField({
      name: 'ctaBanner',
      title: 'CTA Banner (Per-Post Override)',
      type: 'object',
      description:
        'Override the default CTA banner for this post. Leave all fields empty to use the global default from Blog Page settings.',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonUrl', title: 'Button URL', type: 'string' }),
      ],
    }),

    // ─── SEO ─────────────────────────────────────────────────────────────────
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category.label',
    },
  },
});
