'use strict';

const mock = require('egg-mock');

describe('test/uuid-int.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/uuid-int-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, uuidInt')
      .expect(200);
  });
});
