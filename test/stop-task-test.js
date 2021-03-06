'use strict';

var expect = require('expect.js');
var sinon = require('sinon');
var cron = require('../src/node-cron');

describe('stopping a task', () => {
  beforeEach(() => {
    this.clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    this.clock.restore();
  });

  it('should stop a task', () => {
    var executed = 0,
      task = cron.schedule('* * * * *', () => {
        executed++;
      });

    this.clock.tick(1000 * 60 + 1);
    task.stop();
    this.clock.tick(1000 * 60 + 1);
    expect(executed).to.equal(1);
  });
});
