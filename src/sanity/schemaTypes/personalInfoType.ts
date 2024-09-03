import { Rule } from "sanity";

const personalInfoType = {
  name: "personalInfo",
  title: "Personal Info",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule: Rule) => rule.required(),
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
              name: "platform",
              title: "Platform",
              type: "string",
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule: Rule) =>
                rule.required().uri({
                  allowRelative: false,
                  scheme: ["https"],
                }),
            },
          ],
        },
      ],
      validation: (rule: Rule) => rule.unique(),
    },
  ],
};

export default personalInfoType;
