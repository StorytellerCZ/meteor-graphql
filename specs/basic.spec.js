/* eslint-disable prefer-arrow-callback, func-names, global-require */
/* eslint-env mocha */
import { chai } from 'meteor/practicalmeteor:chai';

describe('graphql import', function () {
  it('should import .graphql', function () {
    const { kind, definitions } = require('./example.graphql');
    chai.expect(kind).to.be.ok;
    chai.expect(definitions).to.be.ok;
  });

  it('should import .graphqls', function () {
    const { kind, definitions } = require('./schema.graphqls');
    chai.expect(kind).to.be.ok;
    chai.expect(definitions).to.be.ok;
  });

  it('should import .gql', function () {
    const { kind, definitions } = require('./example2.gql');
    chai.expect(kind).to.be.ok;
    chai.expect(definitions).to.be.ok;
  });

  it('should import empty .graphql', function () {
    const empty = require('./empty.graphql');

    chai.expect(empty).to.deep.equal({});
  });
});
