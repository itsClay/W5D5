
const readline = require('readline');
// Because Reasons.

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




class TowersOfHanoi {
  constructor() {
    this.stacks = [[3,2,1],[],[]];
  }
  run (completionCallback) {
    if(this.isWon()){
      completionCallback();
    }
    else{
      this.promptMove(completionCallback);
    }
    // render board
    // check if player has won?
    // ask for move
    // check if move is valid?
    // make move
  }

  promptMove(completionCallback) {
    this.printStacks();
    reader.question('Make your move! (start move)', startMove => {
      reader.question("Make your move! (end move)",endMove => {
        if (!this.move(startMove, endMove)){
          console.log("invalid move");
        }
        this.run(completionCallback);
      });
    });
  }

  move(startIdx, endIdx){
    if(this.isValidMove(startIdx, endIdx)){
      this.stacks[endIdx].push(this.stacks[startIdx].pop());
      return true;
    }
    return false;
  }
  printStacks() {
    console.log(JSON.stringify(this.stacks));
  }

  isValidMove(startIdx,endIdx){
    let stack1 = this.stacks[startIdx];
    let stack2 = this.stacks[endIdx];
    console.log(stack1[ stack1.length - 1], stack2[ stack2.length - 1]);

    if(startIdx < 0 || startIdx > 2 || endIdx < 0 || endIdx > 2) {
      return false;
    }
    if(stack1.length === 0){
      return false;
    }
    if(stack1[ stack1.length - 1] > stack2[ stack2.length - 1]){
      return false;
    }
    return true;
  }

  isWon() {
    return this.stacks[1].length === 3 || this.stacks[2].length === 3;
  }
}
const completionCallback = function() {
  console.log('Congratulations, you win!');
  reader.question('Would you like to play again? (y/n)', resp => {
    resp = resp.toLowerCase();
    resp === 'y' ? new TowersOfHanoi().run(completionCallback) : reader.close();
  });

};

new TowersOfHanoi().run(completionCallback);
