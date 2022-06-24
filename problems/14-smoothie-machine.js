/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// your code here
let smoothieMachine = (...args) => {
  let str = `I'm having a smoothie with `;

  if (args.length != 0 ) {
    for (let i = 0; i < args.length; i++) {
      if ( i == 0) {
        str += args[i];
      } else {
        let word = args[i];
        let new_word = `and ${word}`;
        str += new_word;
      }

    }
  }

  return smoothie = (...others) => {

    if (str.endsWith("with ") == false) {
      for (let x = 0; x < others.length; x++) {
        let ele = others[x];
        let new_ele = ` and ${ele}`;
        str += new_ele;
      }
    }
    else {

      for (let j = 0; j < others.length; j++) {
        if (j == 0) {
          str += others[j]
        } else {
          let thisWord = others[j];
          let newThisWord = ` and ${thisWord} that`;
          str += newThisWord;
        }
      }

    }

    return str;
  }

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
