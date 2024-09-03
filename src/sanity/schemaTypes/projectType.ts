import { Rule } from "sanity";

const projectType = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "github",
      title: "GitHub URL",
      type: "url",
      validation: (rule: Rule) =>
        rule.required().uri({
          allowRelative: false,
          scheme: ["https"],
        }),
    },
    {
      name: "live",
      title: "Live URL",
      type: "url",
      validation: (rule: Rule) =>
        rule.uri({
          allowRelative: false,
          scheme: ["https"],
        }),
    },
    {
      name: "demo",
      title: "Demo URL",
      type: "url",
      validation: (rule: Rule) =>
        rule.uri({
          allowRelative: false,
          scheme: ["https"],
        }),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule: Rule) => rule.required(),
    },
  ],
};

export default projectType;
