const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.split('');
    let answer = '';
    


    function getDigitalChar(array) {
      let temp = [];
      let decimal = '';
      let digitalArray = [];
      
      for (let i = 0; i < 10; i++) {
        temp.push(array[i]);
      }

      if (temp[0] == '*') {
        return ['**********'];
      }
      
      while (temp[0] === '0') {
        temp.shift();
      }

      for (let k = 0; k < temp.length; k++) {
        decimal+= temp[k];
        if (k % 2 === 1) {
          digitalArray.push(decimal);
          decimal = '';
        }
      }
      
      return digitalArray;
    } 

   function removeDigitalChar(array) {
     for (let i = 0; i < 10; i++) {
       array.shift();
     }
     return array;
   }

  
    
    function getCharFromDigital (array) {
      let answer = '';
      let morse = '';
      
      if (array[0] === '**********') {
        return ' ';
      }

      for (let i = 0; i < array.length; i++) {
        if (array[i] === '10') {
          morse += '.';
        } else {
          morse += '-'
        };
      }

        for (let key in MORSE_TABLE) {
         if (morse === key) {
           answer += MORSE_TABLE[key];
         } 
        }
      return answer;
    }

    while(expr.length > 0) {
      answer += getCharFromDigital(getDigitalChar(expr));
      removeDigitalChar(expr);
    }
    return answer;

 // write your solution here
}

module.exports = {
    decode
}