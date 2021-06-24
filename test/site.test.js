const supertest = require("supertest");
const sinon = require("sinon");
const assert = require('assert');
const { contactService, authService } = require('../services');
const { application } = require("../application");

const agent = supertest.agent(application)

describe("Sites", function() {

    afterEach(function () {
        sinon.restore();
    });

    it("it should get all site", function(done) {
        sinon.stub(contactService, 'list').returns([]);
        agent.get("/sites").expect(200).end((err, res) => {
            assert.deepStrictEqual(res.body, []);
            return done()
        });
    });

    it("it should get existing site", function(done) {
      sinon.stub(contactService, 'retrive').withArgs('2').returns({});
      agent.get("/sites/2").expect(200).end(done);
    });

    it("it should not get none existing site", function(done) {
        sinon.stub(contactService, 'retrive').withArgs('3').returns(null);
        agent.get("/sites/3").expect(404).end(done);
    });

    it("it should create site", function(done) {
        sinon.stub(contactService, 'create').returns({});
        agent.post("/sites").expect(201).end(done);
    });

    it("it should delete site", function(done) {
        sinon.stub(contactService, 'delete').returns({});
        agent.delete("/sites/2").expect(204).end(done);
    });
});
