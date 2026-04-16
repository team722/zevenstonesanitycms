import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Global Header
    defineField({ name: 'logo', title: 'Site Logo', type: 'image' }),
    defineField({
      name: 'navigation', title: 'Header Navigation', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'text', title: 'Link Text', type: 'string' }),
          defineField({ name: 'url', title: 'URL', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'headerCta', title: 'Header CTA Button', type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Button Text', type: 'string' }),
        defineField({ name: 'url', title: 'Button URL', type: 'string' }),
      ],
    }),
    // Global Footer
    defineField({ name: 'footerDescription', title: 'Footer Description', type: 'text', rows: 3 }),
    defineField({
      name: 'footerNavigation', title: 'Footer Quick Links', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'text', title: 'Link Text', type: 'string' }),
          defineField({ name: 'url', title: 'URL', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'footerServices', title: 'Footer Expertise Links', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'text', title: 'Service Name', type: 'string' }),
          defineField({ name: 'url', title: 'URL', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'legalLinks', title: 'Legal Links', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'text', title: 'Link Text', type: 'string' }),
          defineField({ name: 'url', title: 'URL', type: 'string' }),
        ],
      }],
    }),
    defineField({ name: 'copyrightText', title: 'Copyright Text', type: 'string' }),

    // Existing Settings
    defineField({
      name: 'partnerLogos', title: 'Partner / Client Logos', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Company Name', type: 'string' }),
          defineField({ name: 'logo', title: 'Logo URL or Image', type: 'image' }),
        ],
      }],
    }),
    defineField({
      name: 'coreValues', title: 'Core Values', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Value Title', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        ],
      }],
    }),
    defineField({ name: 'contactEmail', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'phoneNumber', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'address', title: 'Office Address', type: 'text', rows: 2 }),
    defineField({ name: 'linkedIn', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
  ],
});
