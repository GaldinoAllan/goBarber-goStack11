import { getRepository, Repository } from 'typeorm';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUserRepository {
  // eslint-disable-next-line prettier/prettier
  private ormRepository: Repository<User>;

  constructor(){
    this.ormRepository = getRepository(User);
  }

  async findById(id: string): Promise<User | undefined>{
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined>{
    const user = await this.ormRepository.findOne({
      where: { email }
    });

    return user;
  }

  async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  async save(user: User): Promise<User>{
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
