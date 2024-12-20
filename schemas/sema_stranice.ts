import { defineType } from 'sanity';

export default defineType({
  name: 'semaStranice', // Naziv sheme
  title: 'Sema Stranice',
  type: 'document',
  fields: [
    
    {
      name: 'title',
      title: 'Title',
      type: 'string', // Naslov sekcije
    },
    {
      name: 'slug', // Dodato polje za slug
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Automatsko generisanje sluga na osnovu naslova
        maxLength: 200, // Maksimalna dužina sluga
      },
    },
    {
      name: 'images', // Promenjeno ime polja u 'images'
      title: 'Images', 
      type: 'array', // Tip niza za više slika
      of: [
        {
          type: 'image', // Tip za unos slike
          options: {
            hotspot: true, // Omogućava odabir dela slike
          },
        },
      ],
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
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
    },
  ],
});
