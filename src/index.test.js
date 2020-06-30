import { expect } from 'chai';
import app from './index.js';
import request from 'supertest';
import { spy } from 'sinon';


describe('app', () => {
  it('should create an app', () => {
    expect(app).to.be.an("function");
    expect(request(app)).to.be.an("Object");
  });

  it('should return "Hello World"', () => {
    const helloSpy = spy(request(app));
    return helloSpy
      .get('/')
      .expect(200)
      .then(res => {
        console.log(res.body.message)
        expect(res.body).to.be.an("object");
        expect(helloSpy.called).to.be.eql(true);
        expect(res.body.message).to.eql("Hello World");
      })
  })
});