import { defineField, defineType } from 'sanity';

// Reusable block types for the page builder
const heroBlock = defineField({
  name: 'hero', title: 'Hero / Header Section', type: 'object',
  fields: [
    defineField({ name: 'headline', title: 'Main Headline', type: 'string' }),
    defineField({ name: 'subheadline', title: 'Sub Headline / Tagline', type: 'text', rows: 2 }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Text', type: 'string' }),
    defineField({ name: 'ctaUrl', title: 'CTA Button URL', type: 'string' }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
  ],
});

const servicesFeaturesBlock = defineField({
  name: 'servicesFeatures', title: 'Features / Services Grid', type: 'object',
  fields: [
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({
      name: 'items', title: 'Feature Items', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        ],
      }],
    }),
  ],
});

const testimonialBlock = defineField({
  name: 'testimonialsSection', title: 'Testimonials Section', type: 'object',
  fields: [
    defineField({ name: 'sectionTitle', title: 'Section Title', type: 'string' }),
    defineField({
      name: 'testimonials', title: 'Testimonials', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
  ],
});

const ctaBannerBlock = defineField({
  name: 'ctaBanner', title: 'CTA Banner', type: 'object',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
    defineField({ name: 'buttonUrl', title: 'Button URL', type: 'string' }),
    defineField({ name: 'backgroundColor', title: 'Background Color (hex)', type: 'string' }),
  ],
});

const statsBlock = defineField({
  name: 'statsSection', title: 'Stats / Numbers Section', type: 'object',
  fields: [
    defineField({
      name: 'stats', title: 'Stats', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', type: 'string', title: 'Value' }),
          defineField({ name: 'label', type: 'string', title: 'Label' }),
        ],
      }],
    }),
  ],
});

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Internal Page Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug', title: 'URL Path (e.g. /shopify-seo)', type: 'slug',
      options: { source: 'title' }, validation: (r) => r.required(),
    }),
    defineField({
      name: 'pageBlocks', title: 'Page Sections', type: 'array',
      of: [
        { type: 'object', name: 'hero', title: 'Hero Section', fields: heroBlock.fields },
        { type: 'object', name: 'servicesFeatures', title: 'Features Grid', fields: servicesFeaturesBlock.fields },
        { type: 'object', name: 'testimonialsSection', title: 'Testimonials', fields: testimonialBlock.fields },
        { type: 'object', name: 'ctaBanner', title: 'CTA Banner', fields: ctaBannerBlock.fields },
        { type: 'object', name: 'statsSection', title: 'Stats Section', fields: statsBlock.fields },
      ],
    }),
    defineField({
      name: 'seo', title: 'SEO Settings', type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
        defineField({ name: 'ogImage', title: 'Social Share Image', type: 'image' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
});
