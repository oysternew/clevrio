import { defineType } from 'sanity';

export default defineType({
  name: 'banerPrvi', // Naziv sheme
  title: 'Baner Prvi',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image', // Tip za unos slike
      options: {
        hotspot: true, // Omogućava odabir dela slike
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string', // Naslov sekcije
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text', // Glavni tekst sekcije
    },
    {
      name: 'list',
      title: 'List Items',
      type: 'array',
      of: [
        {
          type: 'string', // Lista stavki u tekstu
        },
      ],
    },
    {
      name: 'link',
      title: 'Link Text',
      type: 'string', // Tekst linka
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url', // URL linka
    },
  ],
});
