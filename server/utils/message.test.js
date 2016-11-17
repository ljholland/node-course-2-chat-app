var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it ('should generate the correct message object', () => {
     const email = 'lance@LOL.com';
     const textMsg = 'some exciting text';

     var message = generateMessage(email,textMsg);

     expect(message.createdAt).toBeA('number');
     expect(message).toInclude({from, textMsg});
  });
});
