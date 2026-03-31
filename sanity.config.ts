import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { codeInput } from '@sanity/code-input'
import seofields from 'sanity-plugin-seofields'
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

    structureTool(),
    visionTool(),
    codeInput(),
    seofields(),
  ],

  schema: {
    types: schemaTypes,
  },
})
