import ISendMailDTO from '../dtos/ISendMailDTO'

// eslint-disable-next-line prettier/prettier
export default interface IMailProvider{
  sendMail(data: ISendMailDTO): Promise<void>;
}
