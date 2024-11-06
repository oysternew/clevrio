import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: "default",
  title: "Clevrio",

  projectId: "uw1md8cf",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool(), visionTool(),],

  schema: {
    types: schemaTypes,
  },
});
