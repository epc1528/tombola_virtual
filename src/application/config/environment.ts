export const mongo = {
  url: process.env.MONGO_URL ?? '',
  // host: process.env.MONGO_HOST ?? "",
  // port: +(process.env.MONGO_PORT ?? "27017"),
  // username: process.env.MONGO_USER ?? "",
  // password: process.env.MONGO_PASSWORD ?? "",
  database: process.env.MONGO_DATABASE ?? ''
};

export const port = +(process.env.PORT ?? '9000');

export const keyJwt = process.env.JWT_KEY ?? '456789';
