interface ITemplateVariables {
  [key: string]: string | number;
}

// eslint-disable-next-line prettier/prettier
export default interface IParseMailTemplateDTO {
  template: string;
  variables: ITemplateVariables;
}
