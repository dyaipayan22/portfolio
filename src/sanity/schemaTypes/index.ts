import { type SchemaTypeDefinition } from "sanity";
import personalInfoType from "./personalInfoType";
import projectType from "./projectType";
import workExperienceType from "./workExperienceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personalInfoType, projectType, workExperienceType],
};
