import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'nestedService',
  title: 'Nested Service',
  type: 'document',
  groups: [
    { name: 'general', title: 'General Info' },
    { name: 'hero', title: 'Hero Section' },
    { name: 'disciplines', title: 'Disciplines' },
    { name: 'process', title: 'Process Section' },
    { name: 'caseStudies', title: 'Case Studies Section' },
    { name: 'faqs', title: 'FAQs Section' },
    { name: 'ctas', title: 'CTAs & Engagement' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // --- General ---
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'general',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parentService',
      title: 'Parent Service',
      type: 'reference',
      to: [{ type: 'service' }],
      group: 'general',
      description: 'The main service category this nested service belongs to.',
    }),

    // --- Hero ---
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow text', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text' }),
        defineField({
          name: 'actions',
          title: 'Actions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'url', title: 'URL', type: 'string' },
                { name: 'style', title: 'Style', type: 'string', options: { list: ['primary', 'secondary'] } },
              ],
            },
          ],
        }),
        defineField({
          name: 'trustChips',
          title: 'Trust Chips',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'iconName', title: 'Icon Name (lucide)', type: 'string' },
                { name: 'label', title: 'Label', type: 'string' },
              ],
            },
          ],
        }),
        defineField({
          name: 'illustration',
          title: 'Illustration Image',
          type: 'image',
          description: 'Optional: Overrides the hardcoded SVG illustration.',
          options: { hotspot: true },
        }),
      ],
    }),

    // --- Stats Bar ---
    defineField({
      name: 'statsBar',
      title: 'Stats Bar',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),

    // --- Disciplines ---
    defineField({
      name: 'disciplines',
      title: 'Disciplines',
      type: 'array',
      group: 'disciplines',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'intro', title: 'Intro Text', type: 'text' },
            { name: 'deliverablesLabel', title: 'Deliverables Label', type: 'string', initialValue: "What's included" },
            { name: 'deliverables', title: 'Deliverables', type: 'array', of: [{ type: 'string' }] },
            { name: 'outcomePills', title: 'Outcome Pills', type: 'array', of: [{ type: 'string' }] },
            {
              name: 'insideCard',
              title: 'Inside Card Details',
              type: 'object',
              fields: [
                { name: 'title', title: 'Card Title', type: 'string' },
                { name: 'subtitle', title: 'Card Subtitle', type: 'string' },
                { name: 'items', title: 'Card Items', type: 'array', of: [{ type: 'string' }] },
              ],
            },
            {
              name: 'caseStudy',
              title: 'Highlight Case Study',
              type: 'object',
              fields: [
                { name: 'tag', title: 'Tag (e.g., Case Study • Content)', type: 'string' },
                { name: 'mainMetric', title: 'Main Metric', type: 'string' },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
                { name: 'logo', title: 'Client Logo', type: 'image' },
                { name: 'url', title: 'URL', type: 'string' },
              ],
            },
             defineField({
          name: 'disciplineIllustration',
          title: 'Discipline Illustration Image',
          type: 'image',
          description: 'Optional: Overrides the hardcoded SVG illustration.',
          options: { hotspot: true },
        }),
          ],
        },
      ],
    }),

    // --- Process Section ---
    defineField({
      name: 'processSection',
      title: 'Process Section',
      type: 'object',
      group: 'process',
      fields: [
        { name: 'secLabel', title: 'Section Label', type: 'string' },
        { name: 'secTitle', title: 'Section Title', type: 'string' },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
              ],
            },
          ],
        },
        { name: 'rightCopy', title: 'Right Side Copy', type: 'array', of: [{ type: 'text' }] },
        {
          name: 'timelineCard',
          title: 'Timeline Card',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'period', title: 'Period (e.g. Months 1-3)', type: 'string' },
                    { name: 'description', title: 'Description', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),

    // --- Case Studies Section ---
    defineField({
      name: 'caseStudiesSection',
      title: 'Case Studies Section',
      type: 'object',
      group: 'caseStudies',
      fields: [
        { name: 'secLabel', title: 'Section Label', type: 'string' },
        { name: 'secTitle', title: 'Section Title', type: 'string' },
        { name: 'secSub', title: 'Section Subtitle', type: 'text' },
        {
          name: 'caseStudies',
          title: 'Case Studies',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'disciplineTag', title: 'Discipline Tag', type: 'string' },
                { name: 'logo', title: 'Client Logo', type: 'image' },
                { name: 'mainMetric', title: 'Main Metric', type: 'string' },
                {
                  name: 'results',
                  title: 'Results',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        { name: 'value', title: 'Value', type: 'string' },
                        { name: 'label', title: 'Label', type: 'string' },
                      ],
                    },
                  ],
                },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'challenge', title: 'The Challenge', type: 'text' },
                { name: 'tacticalActions', title: 'Tactical Actions', type: 'array', of: [{ type: 'string' }] },
                { name: 'quote', title: 'Quote', type: 'string' },
                { name: 'url', title: 'URL', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),

    // --- FAQs ---
    defineField({
      name: 'faqs',
      title: 'FAQs Section',
      type: 'object',
      group: 'faqs',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'text' },
        {
          name: 'list',
          title: 'Questions & Answers',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', title: 'Question', type: 'string' },
                { name: 'answer', title: 'Answer', type: 'text' },
              ],
            },
          ],
        },
      ],
    }),

    // --- CTAs & Engagement ---
    defineField({
      name: 'faqCta',
      title: 'Mid-Page CTA (above Case Studies)',
      type: 'object',
      group: 'ctas',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        { name: 'buttonUrl', title: 'Button URL', type: 'string' },
        { name: 'trustNote', title: 'Trust Note', type: 'string' },
        { name: 'image', title: 'Side Image', type: 'image' },
      ],
    }),
    defineField({
      name: 'finalCta',
      title: 'Final CTA',
      type: 'object',
      group: 'ctas',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'primaryButtonText', title: 'Primary Button Text', type: 'string' },
        { name: 'primaryButtonUrl', title: 'Primary Button URL', type: 'string' },
        { name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string' },
        { name: 'secondaryButtonUrl', title: 'Secondary Button URL', type: 'string' },
        { name: 'trustNote', title: 'Trust Note', type: 'string' },
        { name: 'badges', title: 'Badges', type: 'array', of: [{ type: 'string' }] },
      ],
    }),

    // --- SEO ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'parentService.title',
    },
  },
});
