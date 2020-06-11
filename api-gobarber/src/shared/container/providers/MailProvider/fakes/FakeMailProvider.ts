import IMailProvider from '../models/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  // eslint-disable-next-line prettier/prettier
  private messages: IMessage[] = [];

  async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({
      to,
      body,
    })
  }
}
