import { Rule } from "sanity";

const workExperienceType = {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      description: 'E.g., "Jan 2020 - Present" or "2018 - 2020"',
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule: Rule) => rule.required(),
    },
  ],
};

export default workExperienceType;
