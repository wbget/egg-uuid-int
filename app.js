'use strict';

const uuid = require('uuid-int');

module.exports = app => {
  app.addSingleton('uuint', createUuidInt);
};

function createUuidInt(config, app) {
  const { id, seed } = config;
  const client = uuid(id, seed);
  app.beforeStart(async () => {
    app.coreLogger.info(
      `[egg-uuid-int] init instance success, id: ${client.id}, seed: ${
        client.seed
      }`
    );
  });
  return client;
}
