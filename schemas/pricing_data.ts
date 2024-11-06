const pricing_data = {
  name: "pricing_data",
  title: "Pricing Data",
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
      name: "plan",
      title: "Plan",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "feature",
              title: "Feature",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default pricing_data;
