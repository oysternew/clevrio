const testimony_data = {
  name: "testimony_data",
  title: "Testimony Data",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
      hidden: true,
      readOnly: true,
    },
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
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "testimony",
      title: "testimony",
      type: "text",
    },
  ],
};

export default testimony_data;
