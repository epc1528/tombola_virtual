import { Collection } from 'mongodb';

import { IBaseRepository } from '../../../domain/repositories';
import { MongoHelper } from '../../orm/mongo/mongodb';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  public readonly collection: Collection;

  constructor(collectionName: string, db = MongoHelper.connection()) {
    this.collection = db.collection(collectionName);
  }

  async create(item: T): Promise<T> {
    const insertIdDocument = await this.collection.insertOne(item);
    Object.assign(item, {
      _id: insertIdDocument.insertedId.toHexString()
    });
    return item;
  }

  async update(filter: any, item: T): Promise<T> {
    const updateDoc = {
      $set: item
    };
    const document = await this.collection.updateOne(filter, updateDoc);
    return document as unknown as T;
  }

  async updateCredit(filter: any, item: T): Promise<T> {
    const updateDoc = {
      $inc: item
    };
    const document = await this.collection.updateOne(filter, updateDoc);
    return document as unknown as T;
  }

  async delete(filter: any): Promise<boolean> {
    const document = await this.collection.deleteOne(filter);
    return document.deletedCount === 1;
  }

  async find(data: any = {}): Promise<T[]> {
    const document = await this.collection.find(data).toArray();
    return document as unknown as T[];
  }

  async findOne(data: any): Promise<T | null> {
    const document = await (this.collection.findOne(
      data
    ) as unknown as Promise<T>);
    return document;
  }

  async findByPk(id: string): Promise<T> {
    const document = await this.collection.findOne({ _id: id });
    return document as unknown as T;
  }

  async count(filter: any): Promise<number> {
    const document = await (this.collection.count(
      filter
    ) as unknown as Promise<number>);

    return document;
  }
}
