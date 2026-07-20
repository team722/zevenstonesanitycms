export default {
  name: 'websiteLandingPageAbTestEvent',
  title: 'Website Landing Page A/B Test Event',
  type: 'document',
  fields: [
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: ['direct_download', 'form_then_download']
      }
    },
    {
      name: 'event',
      title: 'Event Type',
      type: 'string',
      options: {
        list: ['cta_clicked', 'form_opened', 'form_submitted', 'pdf_downloaded']
      }
    },
    {
      name: 'sessionId',
      title: 'Session ID',
      type: 'string'
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'event',
      subtitle: 'variant'
    }
  }
};
