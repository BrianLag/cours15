const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.end('Hello World');
});

server.listen(3000);
console.log('Adresse du serveur: http://localhost:3000');

const chalk = require('chalk');

console.log(chalk.blue('Lucas')+ ' et ' + chalk.red('Martin') + ' et ' + chalk.yellow('Angélique') + ' et ' + chalk.green('Stéphaine'));






