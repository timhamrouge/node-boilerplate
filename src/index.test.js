import { expect } from 'chai';

import sayHello from './index.js';

describe('sayHello', () => {
  it('should say "Hello World"', () => {
    expect(sayHello()).to.eql('Hello World');
  })
});