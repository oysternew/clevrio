const faq_data = {
  name: "faq_data",
  title: "Faq Data",
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
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
    },
  ],
};

export default faq_data;
