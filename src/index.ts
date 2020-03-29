import {ApplicationConfig} from '@loopback/core';
import {StoreApplication} from './application';

export {StoreApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new StoreApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
