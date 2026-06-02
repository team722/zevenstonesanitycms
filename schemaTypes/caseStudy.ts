import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  groups: [
    { name: 'hero', title: '1. Hero Section', default: true },
    { name: 'impact', title: '2. Impact & Metrics' },
    { name: 'beforeAfter', title: '3. Before vs After' },
    { name: 'story', title: '4. Challenge / Solution / Results' },
    { name: 'process', title: '5. Process Timeline' },
    { name: 'ctas', title: '6. CTAs & Forms' },
    { name: 'testimonial', title: '7. Testimonial & Related Stories' },
    { name: 'seo', title: '8. SEO' },
  ],
  fields: [
    // =============================================
    // GROUP 1: HERO SECTION (top of page)
    // =============================================
    defineField({
      name: 'client', title: 'Client Name', type: 'string',
      group: 'hero',
      description: 'Appears as the badge text in the hero section',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'industry', title: 'Industry', type: 'string',
      group: 'hero',
      description: 'Shown next to client name in the hero badge',
    }),
    defineField({
      name: 'slug', title: 'Slug', type: 'slug',
      group: 'hero',
      description: 'URL-friendly identifier (auto-generated from client name)',
      options: { source: 'client', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'displayOrder', title: 'Display Order', type: 'number',
      group: 'hero',
      description: 'Controls case study listing order. Lower numbers appear first.',
    }),
    defineField({
      name: 'image', title: 'Hero Image', type: 'image',
      group: 'hero',
      description: 'Main image displayed on the right side of the hero section',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title', title: 'Story Title', type: 'string',
      group: 'hero',
      description: 'Main heading displayed in the hero section',
    }),
    defineField({
      name: 'headline', title: 'Headline (Optional override for Title)', type: 'string',
      group: 'hero',
      description: 'If set, this replaces the Story Title in the hero',
    }),
    defineField({
      name: 'subtitle', title: 'Story Subtitle', type: 'text', rows: 2,
      group: 'hero',
      description: 'Paragraph text displayed below the hero heading',
    }),
    defineField({
      name: 'timeline', title: 'Timeline (e.g., 6 months)', type: 'string',
      group: 'hero',
      description: 'Project duration — shown in hero stats and throughout the page',
    }),
    defineField({
      name: 'services', title: 'Services Delivered', type: 'array',
      group: 'hero',
      description: 'Service tags displayed below the hero section',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tags', title: 'Tags', type: 'array',
      group: 'hero',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heroCtaPrimary', title: 'Hero Primary Button Text', type: 'string',
      group: 'hero',
      description: 'Primary CTA button in hero (default: "Get Similar Results")',
    }),
    defineField({
      name: 'heroCtaSecondary', title: 'Hero Secondary Button Text', type: 'string',
      group: 'hero',
      description: 'Secondary CTA button in hero (default: "View More Stories")',
    }),
    defineField({
      name: 'trustIndicators', title: 'Hero Trust Indicators', type: 'array',
      group: 'hero',
      description: 'Trust badges below hero buttons (e.g., "Free consultation", "No obligation")',
      of: [{ type: 'string' }],
    }),
    // =============================================
    // GROUP 2: IMPACT & METRICS
    // =============================================
    defineField({
      name: 'results', title: 'Impact Metrics', type: 'object',
      group: 'impact',
      description: 'Metrics and overview content shown outside the tabbed case details',
      fields: [
        defineField({ name: 'storyHeading', title: 'Story Heading', type: 'string', description: 'Heading for the overview area (default: "The Story Behind the Numbers")' }),
        defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 3, description: 'Summary paragraph displayed below the story heading' }),
        defineField({ name: 'measurableResultsHeading', title: 'Measurable Results Heading', type: 'string', description: 'Heading for the dark metrics section (default: "Impact at a Glance")' }),
        defineField({ name: 'measurableResultsDescription', title: 'Measurable Results Description', type: 'text', rows: 2, description: 'Optional short text shown below the measurable results heading' }),
        defineField({
          name: 'metrics', title: 'Key Metrics', type: 'array',
          description: 'Metric cards shown in the "Impact at a Glance" dark section',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'value', title: 'Value (e.g., 300%)', type: 'string' }),
              defineField({ name: 'label', title: 'Label', type: 'string' }),
            ],
          }],
        }),
      ],
    }),
    // =============================================
    // GROUP 3: BEFORE VS AFTER
    // =============================================
    defineField({
      name: 'beforeAfter', title: 'Before vs After Comparison', type: 'object',
      group: 'beforeAfter',
      description: 'The side-by-side "Before vs After" comparison section',
      fields: [
        defineField({ name: 'tagline', title: 'Section Tagline', type: 'string', description: 'Small badge text above heading (default: "The Transformation")' }),
        defineField({ name: 'heading', title: 'Section Heading', type: 'string', description: 'Main heading (default: "Before vs After")' }),
        defineField({ name: 'description', title: 'Section Description', type: 'text', rows: 2, description: 'Paragraph below the heading' }),
        defineField({ name: 'bottomBadgeText', title: 'Bottom Badge Text', type: 'string', description: 'Green badge at bottom (default: "Measurable Results Delivered")' }),
        defineField({
          name: 'before', title: 'Before Metrics', type: 'array',
          description: 'Metrics shown in the red "Before" card',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'metric', title: 'Metric Name', type: 'string' }),
              defineField({ name: 'value', title: 'Value', type: 'string' }),
            ],
          }],
        }),
        defineField({
          name: 'after', title: 'After Metrics', type: 'array',
          description: 'Metrics shown in the green "After" card',
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
    // =============================================
    // GROUP 4: CHALLENGE / SOLUTION / RESULTS TABS
    // =============================================
    defineField({
      name: 'challenge', title: 'The Challenge', type: 'object',
      group: 'story',
      description: 'Content for the "Challenge" tab — what problems the client faced',
      fields: [
        defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 3, description: 'Summary paragraph at the top of the Challenge tab' }),
        defineField({ name: 'painPoints', title: 'Pain Points', type: 'array', description: 'Individual problem cards displayed in a grid', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'solution', title: 'Our Solution', type: 'object',
      group: 'story',
      description: 'Content for the "Solution" tab — how you solved the problems',
      fields: [
        defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 3, description: 'Summary paragraph at the top of the Solution tab' }),
        defineField({
          name: 'strategies', title: 'Strategies', type: 'array',
          description: 'Strategy cards shown as numbered steps',
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

    defineField({
      name: 'resultsTab', title: 'The Results', type: 'object',
      group: 'story',
      description: 'Content for the "Results" tab',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', description: 'Default: "Business Impact"' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2, description: 'Description shown below the Results tab heading' }),
        defineField({ name: 'highlightsHeading', title: 'Highlights Heading', type: 'string', description: 'Heading above the result highlight cards' }),
        defineField({
          name: 'additionalImpact',
          title: 'Additional Impact Points',
          type: 'array',
          description: 'Impact bullet cards shown under the Results tab',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'badgeText', title: 'Badge Text', type: 'string', description: 'Badge text at the bottom of the Results card (default: "Success Story")' }),
      ],
    }),

    // =============================================
    // GROUP 5: PROCESS TIMELINE
    // =============================================
    defineField({
      name: 'processSection', title: 'Process Section Heading', type: 'object',
      group: 'process',
      description: 'Heading area for the "How We Made It Happen" timeline section',
      fields: [
        defineField({ name: 'tagline', title: 'Section Tagline', type: 'string', description: 'Small badge text (default: "Our Process")' }),
        defineField({ name: 'heading', title: 'Section Heading', type: 'string', description: 'Main heading (default: "How We Made It Happen")' }),
        defineField({ name: 'description', title: 'Section Description', type: 'text', rows: 2, description: 'Paragraph below the heading' }),
      ],
    }),
    defineField({
      name: 'processTimeline', title: 'Process Timeline Phases', type: 'array',
      group: 'process',
      description: 'Individual timeline phases with deliverables — displayed as numbered cards',
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
    defineField({
      name: 'totalDuration',
      title: 'Total Duration',
      type: 'string',
      group: 'process',
      description: 'Total project duration shown in the process timeline summary. Leave empty to use the Timeline field.',
    }),


    // =============================================
    // GROUP 6: CTAs & FORMS
    // =============================================
    defineField({
      name: 'stickyCtaSubtitle', title: 'Sticky CTA Subtitle', type: 'string',
      group: 'ctas',
      description: 'Text in the sticky bottom bar (e.g., "Join [Client] and 500+ successful brands")',
    }),
    defineField({
      name: 'stickyCtaButtonText', title: 'Sticky CTA Button Text', type: 'string',
      group: 'ctas',
      description: 'Button text in the sticky bottom bar (default: "Start Your Success Story")',
    }),
    defineField({
      name: 'midCta', title: 'Mid-Page CTA Banner', type: 'object',
      group: 'ctas',
      description: 'The blue CTA banner between the Process Timeline and Testimonial sections',
      fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'trustBadges', title: 'Trust Badges', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'finalCta', title: 'Final CTA Section', type: 'object',
      group: 'ctas',
      description: 'The bottom CTA section with value propositions and contact form',
      fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({ name: 'valuePropsHeading', title: 'Value Props Heading', type: 'string' }),
        defineField({ name: 'socialProofText', title: 'Social Proof Text', type: 'string' }),
        defineField({ name: 'socialProofRating', title: 'Social Proof Rating', type: 'string' }),
        defineField({
          name: 'valueProps', title: 'Value Propositions', type: 'array',
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
    defineField({
      name: 'contactForm', title: 'Contact Form Texts', type: 'object',
      group: 'ctas',
      description: 'Customize the contact form in the final CTA section',
      fields: [
        defineField({ name: 'heading', title: 'Form Heading', type: 'string', description: 'Default: "Schedule Your Free Consultation"' }),
        defineField({ name: 'buttonText', title: 'Submit Button Text', type: 'string', description: 'Default: "Get My Free Strategy Session"' }),
        defineField({ name: 'benefits', title: 'Form Benefits', type: 'array', description: 'Badges below the button (e.g., "Free consultation", "No commitment")', of: [{ type: 'string' }] }),
      ],
    }),

    // =============================================
    // GROUP 7: TESTIMONIAL & RELATED STORIES
    // =============================================
    defineField({
      name: 'testimonial', title: 'Client Testimonial', type: 'object',
      group: 'testimonial',
      description: 'Client testimonial quote displayed between the mid CTA and related stories',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
        defineField({ name: 'author', title: 'Author Name', type: 'string' }),
        defineField({ name: 'role', title: 'Author Role / Company', type: 'string' }),
        defineField({ name: 'avatar', title: 'Author Photo', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'relatedStoriesSection', title: 'Related Stories Section Heading', type: 'object',
      group: 'testimonial',
      description: 'Heading area for the "Explore Other Transformations" section near the bottom',
      fields: [
        defineField({ name: 'tagline', title: 'Section Tagline', type: 'string', description: 'Small badge text (default: "More Success Stories")' }),
        defineField({ name: 'heading', title: 'Section Heading', type: 'string', description: 'Main heading (default: "Explore Other Transformations")' }),
        defineField({ name: 'description', title: 'Section Description', type: 'text', rows: 2, description: 'Paragraph below the heading' }),
      ],
    }),

    // =============================================
    // GROUP 8: SEO
    // =============================================
    defineField({
      name: 'seo', title: 'SEO Settings', type: 'seoFields',
      group: 'seo',
    }),
  ],
  preview: {
    select: { title: 'client', subtitle: 'title', media: 'image' },
  },
});
