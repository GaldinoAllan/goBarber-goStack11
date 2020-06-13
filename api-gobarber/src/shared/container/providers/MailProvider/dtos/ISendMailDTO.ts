import IParseMailTemplateDTO from "../../MailTemplateProvider/dtos/IParseMailTemplateDTO";

interface IMailContact {
  name: string;
  email: string;
}

// eslint-disable-next-line prettier/prettier
export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
