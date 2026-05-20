import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    // --- Core Identity ---
    defineField({ name: 'client', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'client', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'title', title: 'Story Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Story Subtitle', type: 'text', rows: 2 }),
    defineField({ name: 'timeline', title: 'Timeline (e.g., 6 months)', type: 'string' }),
    defineField({
      name: 'services',
      title: 'Services Delivered',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),

    // --- Dynamic Page Elements ---
    defineField({ name: 'headline', title: 'Headline (Optional override for Title)', type: 'string' }),
    defineField({ name: 'heroCtaPrimary', title: 'Hero Primary Button Text', type: 'string' }),
    defineField({ name: 'heroCtaSecondary', title: 'Hero Secondary Button Text', type: 'string' }),
    defineField({ name: 'trustIndicators', title: 'Hero Trust Indicators', type: 'array', of: [{ type: 'string' }] }),
    
    defineField({ name: 'stickyCtaSubtitle', title: 'Sticky CTA Subtitle', type: 'string' }),
    defineField({ name: 'stickyCtaButtonText', title: 'Sticky CTA Button Text', type: 'string' }),
    
    defineField({
      name: 'midCta',
      title: 'Mid-Journey CTA',
      type: 'object',
      fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'trustBadges', title: 'Trust Badges', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    
    defineField({
      name: 'finalCta',
      title: 'Final CTA Section',
      type: 'object',
      fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({
          name: 'valueProps',
          title: 'Value Propositions',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            ],
          }],
        }),
      ],
    }),

    // --- Challenge ---
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'object',
      fields: [
        defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 3 }),
        defineField({ name: 'painPoints', title: 'Pain Points', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),

    // --- Solution ---
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'object',
      fields: [
        defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 3 }),
        defineField({
          name: 'strategies',
          title: 'Strategies',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            ],
          }],
        }),
      ],
    }),

    // --- Results ---
    defineField({
      name: 'results',
      title: 'Results',
      type: 'object',
      fields: [
        defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 3 }),
        defineField({
          name: 'metrics',
          title: 'Key Metrics',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'value', title: 'Value (e.g., 300%)', type: 'string' }),
              defineField({ name: 'label', title: 'Label', type: 'string' }),
            ],
          }],
        }),
        defineField({
          name: 'additionalImpact',
          title: 'Additional Impact Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // --- Before / After ---
    defineField({
      name: 'beforeAfter',
      title: 'Before vs After Comparison',
      type: 'object',
      fields: [
        defineField({
          name: 'before',
          title: 'Before Metrics',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'metric', title: 'Metric Name', type: 'string' }),
              defineField({ name: 'value', title: 'Value', type: 'string' }),
            ],
          }],
        }),
        defineField({
          name: 'after',
          title: 'After Metrics',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'metric', title: 'Metric Name', type: 'string' }),
              defineField({ name: 'value', title: 'Value', type: 'string' }),
            ],
          }],
        }),
      ],
    }),

    // --- Process Timeline ---
    defineField({
      name: 'processTimeline',
      title: 'Process Timeline',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'phase', title: 'Phase Name', type: 'string' }),
          defineField({ name: 'duration', title: 'Duration (e.g., Week 1-2)', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          defineField({ name: 'deliverables', title: 'Deliverables', type: 'array', of: [{ type: 'string' }] }),
        ],
      }],
    }),

    // --- Testimonial ---
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
        defineField({ name: 'author', title: 'Author Name', type: 'string' }),
        defineField({ name: 'role', title: 'Author Role / Company', type: 'string' }),
        defineField({ name: 'avatar', title: 'Author Photo', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // --- SEO ---
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
  preview: {
    select: { title: 'client', subtitle: 'title', media: 'image' },
  },
});
