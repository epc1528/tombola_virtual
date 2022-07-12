import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  clean: true,
  minify: true,
  env: {
    NODE_ENV: 'production'
  }
});
