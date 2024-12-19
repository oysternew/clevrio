import { defineType } from 'sanity';

export default defineType({
  name: 'semaStranice', // Naziv sheme
  title: 'Sema Stranice',
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
      type: 'array', // Promenjeno na 'array' da bi se koristio 'block' tip
      of: [
        {
          type: 'block', // Omogućava bogato formatiranje teksta
        },
      ],
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
      name: 'list2',
      title: 'List Items',
      type: 'array',
      of: [
        {
          type: 'string', // Lista stavki u tekstu
        },
      ],
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url', // URL linka
    },
  ],
});