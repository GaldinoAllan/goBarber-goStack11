import UserToken from '../infra/typeorm/entities/UserToken'

// eslint-disable-next-line prettier/prettier
export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
