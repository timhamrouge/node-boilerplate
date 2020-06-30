import { expect } from 'chai';
import { spy } from 'sinon';

import sayHello from './index.js';

describe('sayHello', () => {
  // simple test of the basic functionality
  it('should say "Hello World"', () => {
    expect(sayHello()).to.eql('Hello World');
  })
  // using spies to ensure the function has been called and is returning the correct thing
  it('should call the function', () => {
    const helloSpy = spy(sayHello);

    helloSpy(sayHello);

    expect(helloSpy.called).to.be.eql(true);
    expect(helloSpy.returnValues[0]).to.be.eql('Hello World');

  })
});