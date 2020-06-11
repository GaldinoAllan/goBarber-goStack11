import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUserRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

// import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository
  ) {}

  async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user){
      throw new AppError('User does not exists');
    }

    await this.userTokensRepository.generate(user.id)

    this.mailProvider.sendMail(
      email,
      'Pedido de recuperação de senha recebido!'
    );
  }
}

export default SendForgotPasswordEmailService;
