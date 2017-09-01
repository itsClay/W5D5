const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const addNumbers = function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Gimme a number =>", function (input){
      let num = parseInt(input);
      sum += num;
      console.log(`nums left: ${numsLeft - 1}`);
      console.log(`sum is: ${sum}`);
      addNumbers(sum, --numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
