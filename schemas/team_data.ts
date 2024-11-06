const team_data = {
  name: "team_data",
  title: "Team Data",
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
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "url",
              title: "URL",
              type: "string",
            },
            {
              name: "socialMedia",
              title: "Social Media Icon",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "course",
      title: "Course",
      type: "number",
    },
    {
      name: "students",
      title: "Students",
      type: "number",
    },
  ],
};

export default team_data;
