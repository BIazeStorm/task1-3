const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть довжину в сантиметрах: ', (input) => {
  const n = parseFloat(input);
  
  if (isNaN(n)) {
    console.log('Будь ласка, введіть коректне число.');
  } else {
    const inches = (n / 2.54).toFixed(2);
    console.log(`${n} см = ${inches} дюймів`);
  }

  rl.close();
});