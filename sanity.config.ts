import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { codeInput } from '@sanity/code-input'
import { SEOPane } from 'sanity-plugin-seo-pane'
import { presentationTool } from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'zevenstone-cms',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    // --- Presentation Tool: Live split-screen preview ---
    // Left: Sanity data form  |  Right: Live React website preview
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
        // Points to the local React dev server
        origin: 'http://localhost:3000',
      },
    }),

    structureTool({
      defaultDocumentNode: (S, { schemaType }) => {
        if (['blogPost', 'caseStudy', 'landingPage'].includes(schemaType)) {
          return S.document().views([
            S.view.form(),
            S.view
              .component(SEOPane)
              .options({
                keywords: 'seo.metaTitle',
                synonyms: 'seo.metaTitle',
                url: (doc: any) => `http://localhost:5173/${doc?.slug?.current || ''}`,
              })
              .title('SEO'),
          ])
        }
        return S.document()
      },
    }),
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
