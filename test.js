const assert = require('node:assert')
const invoices = require('./invoices.json');
const plays = require('./plays.json');
const statement = require('./statement');
const expectedOutput =
`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`
const testCase = () => {
  const formattedStatement = statement(invoices[0], plays)
  assert(formattedStatement === expectedOutput);
  console.log('Test passed!');
}

testCase();
