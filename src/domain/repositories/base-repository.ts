interface Write<T> {
  create(item: T): Promise<T>;
  update(filter: any, item: T): Promise<T>;
  delete(filter: any): Promise<boolean>;
}

interface Read<T> {
  find(item?: any): Promise<T[]>;
  findByPk(id: string): Promise<T>;
  findOne(item: any): Promise<T | null>;
  count(filter: any): Promise<number>;
}

export type IBaseRepository<T> = Write<T> & Read<T>;
