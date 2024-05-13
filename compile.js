const path = require('path');
const fs = require('fs');
const solc = require('solc')

//ensures the module works both on windows and linux based systems
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];

