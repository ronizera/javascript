const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite algo: ', (resposta) => {
  console.log(`Você digitou: ${resposta}`);
  rl.close();
});
