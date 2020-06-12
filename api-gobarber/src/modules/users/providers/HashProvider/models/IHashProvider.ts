// eslint-disable-next-line prettier/prettier
export default interface IHashProvider{
  generateHash(payload: string): Promise<string>;
  compareHash(payload:string, hashed: string): Promise<boolean>;
};