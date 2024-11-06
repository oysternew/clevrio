import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'introductionTrading',
  title: 'Introduction Trading',
  type: 'document',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Glavni Naslov',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Podnaslovni Tekst',
      type: 'text',
    }),
    defineField({
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'bulletPoint',
          title: 'Bullet Point',
          fields: [
            defineField({
              name: 'subheading',
              title: 'Podnaslov',
              type: 'string',
            }),
            defineField({
              name: 'paragraph',
              title: 'Paragraf',
              type: 'text',
            }),
            defineField({
              name: 'listItems',
              title: 'Lista',
              type: 'array',
              of: [{ type: 'text' }],
            }),
          ],
        },
      ],
    }),
   
    defineField({
      name: 'conclusionText',
      title: 'Conclusion',
      type: 'text',
    }),
  ],
});
