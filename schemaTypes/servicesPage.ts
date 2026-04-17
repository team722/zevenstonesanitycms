import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // ─── Existing ───────────────────────────────────────────────────────────
    defineField({ name: 'hero', title: 'Services Page Hero', type: 'heroSection' }),
    defineField({ name: 'notSureWhereToStartCta', title: 'Not Sure Where to Start CTA', type: 'ctaSection' }),
    defineField({ name: 'techStackHeading', title: 'Tech Stack Heading', type: 'sectionHeading' }),
    // ─── 1. Positioning Intro ────────────────────────────────────────────────
    defineField({
      name: 'positioningIntro',
      title: 'Positioning Intro Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
        defineField({ name: 'positioningLine', title: 'Positioning Tag Line', type: 'string' }),
      ],
    }),

    // ─── 2. The Problem ──────────────────────────────────────────────────────
    defineField({
      name: 'problemSection',
      title: 'The Problem Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Problem Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'closingLine', title: 'Closing Line', type: 'string' }),
      ],
    }),

    // ─── 3. Three Pillars ────────────────────────────────────────────────────
    defineField({
      name: 'pillars',
      title: 'Three Pillars',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'pillarNumber', title: 'Pillar Label (e.g. Pillar 1 — Create)', type: 'string' }),
          defineField({ name: 'title', title: 'Pillar Title', type: 'string' }),
          defineField({ name: 'description', title: 'Pillar Description', type: 'text', rows: 3 }),
          defineField({
            name: 'capabilities',
            title: 'Capabilities',
            type: 'array',
            of: [{ type: 'string' }],
          }),
        ],
        preview: { select: { title: 'title', subtitle: 'pillarNumber' } },
      }],
    }),

    // ─── 4. Technology & AI Layer ────────────────────────────────────────────
    defineField({
      name: 'aiLayerSection',
      title: 'Technology & AI Layer Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({
          name: 'items',
          title: 'AI Capability Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'closingLine', title: 'Closing Line', type: 'string' }),
      ],
    }),

    // ─── 5. How It Works ─────────────────────────────────────────────────────
    defineField({
      name: 'howItWorksSection',
      title: 'How It Works Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'stepLabel', title: 'Step Label (e.g. Audit & Strategy)', type: 'string' }),
              defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 2 }),
            ],
            preview: { select: { title: 'stepLabel', subtitle: 'description' } },
          }],
        }),
      ],
    }),

    // ─── 6. Who We Work With ─────────────────────────────────────────────────
    defineField({
      name: 'whoWeWorkWithSection',
      title: 'Who We Work With Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({
          name: 'partnerTypes',
          title: 'Partner Types',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'idealPartnerDescription', title: 'Ideal Partner Description', type: 'text', rows: 3 }),
      ],
    }),

    // ─── 7. Results You Can Expect ───────────────────────────────────────────
    defineField({
      name: 'resultsSection',
      title: 'Results You Can Expect Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({
          name: 'outcomes',
          title: 'Outcome Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // ─── 8. Partnership Models ───────────────────────────────────────────────
    defineField({
      name: 'partnershipModelsSection',
      title: 'Partnership Models Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Sub Heading', type: 'string' }),
        defineField({
          name: 'models',
          title: 'Partnership Models',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Model Title', type: 'string' }),
              defineField({ name: 'description', title: 'Model Description', type: 'text', rows: 2 }),
            ],
            preview: { select: { title: 'title', subtitle: 'description' } },
          }],
        }),
      ],
    }),

    // ─── 9. What Sets Us Apart ───────────────────────────────────────────────
    defineField({
      name: 'whatSetsUsApartSection',
      title: 'What Sets Us Apart Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({
          name: 'points',
          title: 'Differentiator Points',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'closingLine', title: 'Closing Line', type: 'string' }),
      ],
    }),

    // ─── 10. Service Architecture Tags ───────────────────────────────────────
    defineField({
      name: 'serviceArchitectureTags',
      title: 'Service Architecture Tags (Marquee)',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // ─── 11. Book a Strategy Call CTA ────────────────────────────────────────
    defineField({
      name: 'bookStrategyCallCta',
      title: 'Book a Strategy Call CTA',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({
          name: 'button',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Button Text', type: 'string' }),
            defineField({ name: 'url', title: 'Button URL', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seoFields' }),
  ],
});
