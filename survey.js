const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const main = async() => {
  const q1 = await question(
    'What\'s your name? Nicknames are also acceptable :) ');
  const q2 = await question(
    'What\'s an activity you like doing? ');
  const q3 = await question(
    'What do you listen to while doing that? ');
  const q4 = await question(
    'Which meal is your favourite (eg: dinner, brunch, etc.) ');
  const q5 = await question(
    'What\'s your favourite thing to eat for that meal? ');
  const q6 = await question(
    'Which sport is your absolute favourite? ');
  const q7 = await question(
    'What is your superpower? In a few words, tell us what you are amazing at! ');

  console.log(`\n 
  
  ${q1} loves listening to ${q3} while ${q2}, devouring ${q4} for ${q5}, preferes ${q6} over any other sport, and is amazing at ${q7}.
  `);
  rl.close();
};

main();