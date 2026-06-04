import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudySubmission',
  title: 'Case Study Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
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
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'goals',
      title: 'Goals',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caseStudySlug',
      title: 'Case Study Slug',
      type: 'string',
      description: 'The slug of the case study page where the form was submitted.',
      readOnly: true,
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
      name: 'name',
      caseStudySlug: 'caseStudySlug',
      status: 'status',
    },
    prepare(selection) {
      const { name, caseStudySlug, status } = selection;
      return {
        title: name || 'Unknown',
        subtitle: `${caseStudySlug ? `[Case Study: ${caseStudySlug}]` : '[Case Study]'} • Status: ${status || 'New'}`,
      };
    },
  },
});
