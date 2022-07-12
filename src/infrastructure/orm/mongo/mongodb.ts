import { Db, MongoClient } from 'mongodb';

let client!: MongoClient;
let db!: Db;

export const MongoHelper = {
  async connect(uri: string, dbName: string): Promise<void> {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log('MongoDB loaded and connected! ✌️');
  },

  connection: () => db,

  async disconnect(): Promise<void> {
    await client.close();
    console.log('MongoDB disconnected');
  }
};
