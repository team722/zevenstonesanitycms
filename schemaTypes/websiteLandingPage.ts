export default {
  name: 'websiteLandingPage',
  title: 'Website Landing Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'socialProof', title: 'Social Proof' },
    { name: 'showcaseVideo', title: 'Showcase Video' },
    { name: 'problem', title: 'Problem Section' },
    { name: 'solution', title: 'Solution Section' },
    { name: 'howItWorks', title: 'How It Works' },
    { name: 'numbers', title: 'The Numbers' },
    { name: 'differentiation', title: 'Differentiation' },
    { name: 'partnership', title: 'Partnership Models' },
    { name: 'results', title: 'Results / Case Studies' },
    { name: 'testimonials', title: 'Testimonials' },
    { name: 'qualifier', title: 'Qualifier Section' },
    { name: 'about', title: 'About Section' },
    { name: 'finalCta', title: 'Final CTA & Form' },
    { name: 'seo', title: 'SEO' },
    { name: 'visibility', title: 'Visibility Controls' },
  ],
  fields: [
    // Hero
    {
      name: 'heroHeading',
      title: 'Hero Heading Start',
      type: 'string',
      group: 'hero',
      description: 'The text before the highlighted word'
    },
    {
      name: 'heroHighlight',
      title: 'Hero Highlighted Text',
      type: 'string',
      group: 'hero',
      description: 'The gradient text (e.g., "Actually Deliver")'
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      group: 'hero',
      description: 'Wrap bold text in **asterisks** to make it bold on frontend.'
    },
    {
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'trustLine',
      title: 'Trust Line',
      type: 'string',
      group: 'hero',
    },

    // Social Proof Bar
    {
      name: 'socialStats',
      title: 'Social Proof Stats',
      type: 'array',
      group: 'socialProof',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value (e.g. 1M+)' },
            { name: 'label', type: 'string', title: 'Label' }
          ]
        }
      ]
    },

    // Showcase Video
    {
      name: 'showcaseVideoUrl',
      title: 'Showcase Video File',
      type: 'file',
      group: 'showcaseVideo',
      options: { accept: 'video/mp4' }
    },

    // Problem Section
    {
      name: 'problemLabel',
      title: 'Section Label',
      type: 'string',
      group: 'problem',
    },
    {
      name: 'problemHeading',
      title: 'Heading',
      type: 'string',
      group: 'problem',
    },
    {
      name: 'problemDescription',
      title: 'Description',
      type: 'text',
      group: 'problem',
    },
    {
      name: 'painPoints',
      title: 'Pain Points List',
      type: 'array',
      group: 'problem',
      of: [{ type: 'string' }]
    },
    {
      name: 'urgencyMessage',
      title: 'Urgency Message',
      type: 'text',
      group: 'problem',
    },
    {
      name: 'leadMagnet',
      title: 'Lead Magnet Modal Info',
      type: 'object',
      group: 'problem',
      fields: [
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'buttonText', type: 'string', title: 'Button Text' },
        { name: 'pdfFile', type: 'file', title: 'PDF File Download (Optional, defaults to local asset)', options: { accept: 'application/pdf' } }
      ]
    },

    // Solution Section
    {
      name: 'solutionLabel',
      title: 'Section Label',
      type: 'string',
      group: 'solution',
    },
    {
      name: 'solutionHeading',
      title: 'Heading',
      type: 'string',
      group: 'solution',
    },
    {
      name: 'solutionDescription',
      title: 'Description',
      type: 'text',
      group: 'solution',
      description: 'Wrap bold text in **asterisks** to make it bold on frontend.'
    },
    {
      name: 'services',
      title: 'Services Grid',
      type: 'array',
      group: 'solution',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'iconName', type: 'string', title: 'Lucide Icon Name (e.g. TrendingUp, Zap, Target)' },
            { name: 'inclusions', type: 'array', title: 'Inclusions', of: [{ type: 'string' }] }
          ]
        }
      ]
    },
    {
      name: 'solutionKeyMessage',
      title: 'Key Bottom Message',
      type: 'string',
      group: 'solution',
    },

    // How It Works
    {
      name: 'howItWorksLabel',
      title: 'Section Label',
      type: 'string',
      group: 'howItWorks',
    },
    {
      name: 'howItWorksHeading',
      title: 'Heading',
      type: 'string',
      group: 'howItWorks',
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      group: 'howItWorks',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', type: 'string', title: 'Step Number (e.g. 01)' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'iconName', type: 'string', title: 'Lucide Icon Name' }
          ]
        }
      ]
    },

    // The Numbers
    {
      name: 'numbersHeading',
      title: 'Heading',
      type: 'string',
      group: 'numbers',
    },
    {
      name: 'numbersStats',
      title: 'Statistics',
      type: 'array',
      group: 'numbers',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'label', type: 'string', title: 'Label' }
          ]
        }
      ]
    },

    // Differentiation
    {
      name: 'diffHeading',
      title: 'Heading',
      type: 'string',
      group: 'differentiation',
    },
    {
      name: 'diffIntro',
      title: 'Introductory Description',
      type: 'string',
      group: 'differentiation',
    },
    {
      name: 'diffHighlight',
      title: 'Highlighted Description',
      type: 'string',
      group: 'differentiation',
    },
    {
      name: 'diffBottom',
      title: 'Bottom Box Description',
      type: 'text',
      group: 'differentiation',
    },
    {
      name: 'differentiators',
      title: 'Differentiators',
      type: 'array',
      group: 'differentiation',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', type: 'string', title: 'Text' },
            { name: 'iconName', type: 'string', title: 'Lucide Icon Name' }
          ]
        }
      ]
    },

    // Partnership Models
    {
      name: 'partnershipHeading',
      title: 'Heading',
      type: 'string',
      group: 'partnership',
    },
    {
      name: 'models',
      title: 'Models',
      type: 'array',
      group: 'partnership',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'iconName', type: 'string', title: 'Lucide Icon Name' }
          ]
        }
      ]
    },
    {
      name: 'partnershipNote',
      title: 'Bottom Note',
      type: 'string',
      group: 'partnership',
    },

    // Results
    {
      name: 'resultsLabel',
      title: 'Section Label',
      type: 'string',
      group: 'results',
    },
    {
      name: 'resultsHeading',
      title: 'Heading',
      type: 'string',
      group: 'results',
    },
    {
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      group: 'results',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'metric', type: 'string', title: 'Metric Value (e.g. +567%)' },
            { name: 'label', type: 'string', title: 'Metric Label' }
          ]
        }
      ]
    },

    // Testimonials
    {
      name: 'testimonialsHeading',
      title: 'Heading',
      type: 'string',
      group: 'testimonials',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'testimonials',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', type: 'text', title: 'Quote' },
            { name: 'author', type: 'string', title: 'Author Name' },
            { name: 'role', type: 'string', title: 'Role' }
          ]
        }
      ]
    },

    // Qualifier Section
    {
      name: 'qualifierHeading',
      title: 'Heading',
      type: 'string',
      group: 'qualifier',
    },
    {
      name: 'qualifierDescription',
      title: 'Description',
      type: 'string',
      group: 'qualifier',
    },
    {
      name: 'checklist',
      title: 'Checklist Items',
      type: 'array',
      group: 'qualifier',
      of: [{ type: 'string' }]
    },
    {
      name: 'qualifierCtaHeading',
      title: 'CTA Box Heading',
      type: 'string',
      group: 'qualifier',
    },
    {
      name: 'qualifierCtaButton',
      title: 'CTA Button Text',
      type: 'string',
      group: 'qualifier',
    },

    // About Section
    {
      name: 'aboutHeading',
      title: 'Heading',
      type: 'string',
      group: 'about',
    },
    {
      name: 'aboutDescription1',
      title: 'Description Paragraph 1',
      type: 'text',
      group: 'about',
      description: 'Wrap bold text in **asterisks** to make it bold on frontend.'
    },
    {
      name: 'aboutDescription2',
      title: 'Description Paragraph 2',
      type: 'string',
      group: 'about',
    },
    {
      name: 'aboutTagline',
      title: 'Bottom Tagline',
      type: 'string',
      group: 'about',
    },

    // Final CTA
    {
      name: 'finalCtaHeading',
      title: 'Heading',
      type: 'string',
      group: 'finalCta',
    },
    {
      name: 'finalCtaDescription',
      title: 'Description',
      type: 'text',
      group: 'finalCta',
    },
    {
      name: 'formTitle',
      title: 'Form Floating Sticky Label',
      type: 'string',
      group: 'finalCta',
      description: 'Label used on the sticky form (e.g., "Ready to Scale?")'
    },
    {
      name: 'formBenefits',
      title: 'Benefits Checklist under Form',
      type: 'array',
      group: 'finalCta',
      of: [{ type: 'string' }]
    },

    // Visibility Controls
    {
      name: 'sectionVisibility',
      title: 'Section Visibility Controls',
      type: 'object',
      group: 'visibility',
      fields: [
        { name: 'showSocialProof', title: 'Show Social Proof Bar', type: 'boolean', initialValue: true },
        { name: 'showShowcaseVideo', title: 'Show Showcase Video', type: 'boolean', initialValue: true },
        { name: 'showProblem', title: 'Show Problem Section', type: 'boolean', initialValue: true },
        { name: 'showSolution', title: 'Show Solution Section', type: 'boolean', initialValue: true },
        { name: 'showHowItWorks', title: 'Show How It Works', type: 'boolean', initialValue: true },
        { name: 'showNumbers', title: 'Show The Numbers', type: 'boolean', initialValue: true },
        { name: 'showDifferentiation', title: 'Show Differentiation', type: 'boolean', initialValue: true },
        { name: 'showPartnership', title: 'Show Partnership Models', type: 'boolean', initialValue: true },
        { name: 'showResults', title: 'Show Results / Case Studies', type: 'boolean', initialValue: true },
        { name: 'showTestimonials', title: 'Show Testimonials', type: 'boolean', initialValue: true },
        { name: 'showQualifier', title: 'Show Qualifier Section', type: 'boolean', initialValue: true },
        { name: 'showAbout', title: 'Show About Section', type: 'boolean', initialValue: true },
      ]
    },

    // SEO
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo'
    }
  ],
  preview: {
    prepare() {
      return { title: 'Website Landing Page' };
    }
  }
};
