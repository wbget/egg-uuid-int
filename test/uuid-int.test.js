'use strict';

const mock = require('egg-mock');
const assert = require('assert');

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
    return app
      .httpRequest()
      .get('/')
      .expect('hi, uuidInt')
      .expect(200);
  });
  it('instance success', () => {
    assert(app.uuint);
    assert(app.uuint.id === 1);
  });
  it('generate', () => {
    const a1 = app.uuint.uuid();
    const a2 = app.uuint.uuid();
    assert(a2 - a1 === 1);
  });
});
