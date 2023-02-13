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
    morse = "";
res_text = '';
k = 0;
for (let i = 0; i < expr.length; i++) {
      if (expr[i] !== ' ') {
for (let code in MORSE_TABLE) {
  if (expr[i].toLowerCase() === MORSE_TABLE[code]) {

        for (let j = 0; j < code.length; j++) {
      if (code[j] === '.') {
        res_text = res_text + '10'; k = k + 2;
      } else {
        if (code[j] === '-') {
        res_text = res_text + '11'; k = k + 2;
      } }
          }
            if (k !== 10) {
          for (let h = 0; h < 10 - k; h++) {
            res_text = '0' + res_text;
        }       
    }
    k = 0;
    morse = morse + res_text;
    } 
  }
}
  else { morse = morse + '**********'; }
    console.log(res_text);
  res_text = '';
}
  return morse; 
    // write your solution here
}

module.exports = {
    decode
}
