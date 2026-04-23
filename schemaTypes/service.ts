import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required()
    }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'details', title: 'Service Detail Points', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Button Text', type: 'string' }),
        defineField({ name: 'url', title: 'Button URL', type: 'string' }),
      ],
    }),
    defineField({
      name: 'secondaryCtaButton',
      title: 'Secondary CTA Button',
      type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Button Text', type: 'string' }),
        defineField({ name: 'url', title: 'Button URL', type: 'string' }),
      ],
    }),
    defineField({
      name: 'image', title: 'Service Image', type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'isFeatured', title: 'Show in Homepage Grid?', type: 'boolean', initialValue: false }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number' }),

    // --- New Single Page Design Fields ---

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Headline', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({
          name: 'stats',
          title: 'Hero Stats',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'value', title: 'Value (e.g., 10+)', type: 'string' }),
              defineField({ name: 'label', title: 'Label (e.g., Years Experience)', type: 'string' })
            ]
          }]
        }),
        defineField({
          name: 'trustedLogos',
          title: 'Trusted By Logos',
          type: 'array',
          of: [{ type: 'image' }]
        }),
      ]
    }),

    // Featured Video Highlight
    defineField({
      name: 'featuredVideo',
      title: 'Featured Video',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({ name: 'videoUrl', title: 'Video URL (Vimeo/YouTube)', type: 'url' }),
        defineField({ name: 'thumbnail', title: 'Video Thumbnail', type: 'image' }),
      ]
    }),

    // Benefits (Videos Built for Performance)
    defineField({
      name: 'benefits',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'benefitsList',
          title: 'Benefits List',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'icon', title: 'Icon (SVG string or identifier)', type: 'image' }),
              defineField({ name: 'title', title: 'Benefit Title', type: 'string' }),
              defineField({ name: 'description', title: 'Benefit Description', type: 'text', rows: 3 }),
            ]
          }]
        })
      ]
    }),

    // Process
    defineField({
      name: 'process',
      title: 'Process Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Step Title', type: 'string' }),
              defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 3 }),
            ]
          }]
        })
      ]
    }),

    // Portfolio Showcase
    defineField({
      name: 'portfolio',
      title: 'Portfolio Showcase',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'examples',
          title: 'Video Examples',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Project Title', type: 'string' }),
              defineField({ name: 'category', title: 'Category (e.g., Promo)', type: 'string' }),
              defineField({ name: 'objective', title: 'Objective', type: 'string' }),
              defineField({ name: 'result', title: 'Result', type: 'string' }),
              defineField({ name: 'videoUrl', title: 'Video URL', type: 'url' }),
              defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image' }),
            ]
          }]
        })
      ]
    }),

    // Key Numbers/Stats
    defineField({
      name: 'metrics',
      title: 'Key Metrics Strip',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'list',
          title: 'Metrics',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'value', title: 'Value (e.g., 250+)', type: 'string' }),
              defineField({ name: 'label', title: 'Label', type: 'string' }),
            ]
          }]
        })
      ]
    }),

    // What We Create (Features List)
    defineField({
      name: 'features',
      title: 'What We Create (Features)',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 }),
        defineField({
          name: 'list',
          title: 'Feature Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Card Title', type: 'string' }),
              defineField({ name: 'subTitle', title: 'Subtitle', type: 'string' }),
              defineField({ name: 'inclusions', title: 'Inclusions (Checklist)', type: 'array', of: [{ type: 'string' }] }),
            ]
          }]
        })
      ]
    }),

    // Testimonials
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({
          name: 'list',
          title: 'Testimonials',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', initialValue: 5 }),
              defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
              defineField({ name: 'author', title: 'Author Name', type: 'string' }),
              defineField({ name: 'company', title: 'Author Company/Role', type: 'string' }),
            ]
          }]
        })
      ]
    }),

    // Engagement Models
    defineField({
      name: 'engagement',
      title: 'Engagement Model',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'cardTitle', title: 'Card Title (e.g., Get a Custom Quote)', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
        defineField({ name: 'ctaUrl', title: 'CTA Button URL', type: 'string' }),
      ]
    }),

    // FAQs
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({
          name: 'list',
          title: 'Questions',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'question', title: 'Question', type: 'string' }),
              defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 3 }),
            ]
          }]
        })
      ]
    }),

    // Bottom CTA
    defineField({
      name: 'bottomCta',
      title: 'Bottom CTA Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Headline', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonUrl', title: 'Button URL', type: 'string' }),
        defineField({
          name: 'note',
          title: 'Note Below Button',
          type: 'string',
          description: 'Text shown below CTA button (e.g., We’ll get back to you within 24 hours)'
        }),
      ]
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description', media: 'image' },
  },
});
