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
    defineField({ name: 'companyName', title: 'Company Name', type: 'string' }),
    defineField({ name: 'websiteUrl', title: 'Website URL', type: 'url' }),
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
      name: 'footerServiceColumns',
      title: 'Footer Service Columns',
      description: 'Optional grouped service columns for the large footer menu. If empty, the website uses nested service documents or Footer Expertise Links.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Column Title', type: 'string' }),
          defineField({ name: 'url', title: 'Column URL', type: 'string' }),
          defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Link Text', type: 'string' }),
                defineField({ name: 'url', title: 'URL', type: 'string' }),
              ],
            }],
          }),
        ],
      }],
    }),
    defineField({
      name: 'footerLinkColumns',
      title: 'Footer Secondary Link Columns',
      description: 'Optional grouped columns such as Company, Resources, and Services.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Column Title', type: 'string' }),
          defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'text', title: 'Link Text', type: 'string' }),
                defineField({ name: 'url', title: 'URL', type: 'string' }),
              ],
            }],
          }),
        ],
      }],
    }),
    defineField({
      name: 'footerTrustBadges',
      title: 'Footer Trust Badges',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'officeLocations',
      title: 'Office Locations',
      description: 'Optional managed office list. If empty, the website uses the existing USA, Thirunelveli, and Chennai address fields.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Office Title', type: 'string' }),
          defineField({ name: 'address', title: 'Address', type: 'text', rows: 3 }),
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

    // SEO & Scripts
    defineField({
      name: 'customHeaderScripts',
      title: 'Custom Header Scripts',
      description: 'Scripts to be injected into the <head> of the website (e.g., Google Analytics, Clarity)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'customBodyScripts',
      title: 'Custom Body Scripts',
      description: 'Scripts to be injected right after the opening <body> tag (e.g., Google Tag Manager (noscript))',
      type: 'text',
      rows: 5,
    }),

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
    defineField({ name: 'address', title: 'Office short Address', type: 'text', rows: 2 }),
    defineField({ name: 'address1', title: 'Office USA Address', type: 'text', rows: 2 }),
    defineField({ name: 'address2', title: 'Office Thirunelveli Address', type: 'text', rows: 2 }),
    defineField({ name: 'address3', title: 'Office Chennai Address', type: 'text', rows: 2 }),
    defineField({ name: 'linkedIn', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'twitter', title: 'X / Twitter URL', type: 'url' }),
  ],
});
