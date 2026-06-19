export default {
  name: 'websiteLandingPageSubmission',
  title: 'Website Landing Page Submissions',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'firstName', title: 'First Name', type: 'string' },
    { name: 'lastName', title: 'Last Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'agencyName', title: 'Agency/Company Name', type: 'string' },
    { 
      name: 'growthChallenges', 
      title: 'Biggest Growth Challenges', 
      type: 'array', 
      of: [{ type: 'string' }]
    },
    { name: 'formType', title: 'Form Type', type: 'string' },
    { 
      name: 'status', 
      title: 'Status', 
      type: 'string',
      options: { list: ['New', 'Contacted', 'Qualified', 'Lost'] }
    },
    { name: 'submittedAt', title: 'Submitted At', type: 'datetime' },
  ],
  preview: {
    select: { title: 'firstName', subtitle: 'email', date: 'submittedAt' },
    prepare(selection: any) {
      const { title, subtitle, date } = selection;
      return {
        title: `${title} - ${subtitle}`,
        subtitle: date ? new Date(date).toLocaleString() : 'No date',
      };
    },
  },
};
