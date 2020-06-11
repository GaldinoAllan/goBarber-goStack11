// eslint-disable-next-line prettier/prettier
export default interface IMailProvider{
  sendMail(to: string, body: string): Promise<void>;
}
