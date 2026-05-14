import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'landingPageSubmission',
  title: 'Landing Page Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      options: {
        list: [
          { title: 'Case Study', value: 'Case Study' },
          { title: 'Ready to Scale', value: 'Ready to Scale' },
          { title: 'Strategy Call', value: 'Strategy Call' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'agencyName',
      title: 'Agency Name',
      type: 'string',
    }),
    defineField({
      name: 'challenge',
      title: 'Growth Challenge',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'New' },
          { title: 'Contacted', value: 'Contacted' },
          { title: 'Qualified', value: 'Qualified' },
          { title: 'Closed', value: 'Closed' },
        ],
        layout: 'radio',
      },
      initialValue: 'New',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      formType: 'formType',
      status: 'status',
    },
    prepare(selection) {
      const { firstName, lastName, formType, status } = selection;
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `[${formType}] • Status: ${status}`,
      };
    },
  },
});
