const partner_logos = {
  name: "partner_logos",
  title: "Partner Logos",
  type: "document",
  fields: [
    {
      name: "img",
      title: "Image Source",
      type: "image",
      description: "Upload a event picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default partner_logos;
