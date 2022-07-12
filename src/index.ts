import { mongo, port } from './application/config/environment';
import { MongoHelper } from './infrastructure/orm/mongo/mongodb';

async function main() {
  await MongoHelper.connect(mongo.url, mongo.database);

  const app = (await import('./application/config/server')).default;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
