import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO'

// eslint-disable-next-line prettier/prettier
export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
