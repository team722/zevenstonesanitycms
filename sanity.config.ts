import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {SEOPane} from 'sanity-plugin-seo-pane'

export default defineConfig({
  name: 'default',
  title: 'zevenstone-cms',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    structureTool({
      defaultDocumentNode: (S, {schemaType}) => {
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
    codeInput()
  ],

  schema: {
    types: schemaTypes,
  },
})

