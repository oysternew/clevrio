const course_data = {
  name: "course_data",
  title: "Course Data",
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
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "title" },
    },
    {
      name: "course",
      title: "Course",
      type: "number",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "fee",
      title: "Fee",
      type: "number",
    },
  ],
};

export default course_data;
