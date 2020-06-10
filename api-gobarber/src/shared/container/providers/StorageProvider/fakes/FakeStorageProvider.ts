import IStorageProvider from '../models/IStorageProvider';

export default class FakeStorageProvider implements IStorageProvider {
  // eslint-disable-next-line prettier/prettier
  private storage: string[] = [];

  async saveFile(file: string): Promise<string> {
    this.storage.push(file)

    return file;
  }

  async deleteFile(file: string): Promise<void> {
    const findIndex = this.storage.findIndex(
      storageFile => storageFile === file
    )

    this.storage.splice(findIndex, 1);
  }
}
