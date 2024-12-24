const invoices = require('./invoices.json');
const plays = require('./plays.json');
const statement = require('./statement');

function main() {
  invoices.forEach((invoice) => {
    const formattedStatement = statement(invoice, plays)
    console.log(formattedStatement)
  })
}

main();
