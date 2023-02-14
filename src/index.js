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
let abc = "";
let morse = "";
let res_text = '';
let k = 0;
for (let i = 0; i < expr.length; i += 10) {
  abc = expr.substr(i, 10);
  k = 0; morse = "";
  if (abc !== '**********') {
  for (let j = 0; j < abc.length; j += 2) {
    if (abc.substr(j, 2) === "11") {
      morse = morse + '-';
    }
    if (abc.substr(j, 2) === "10") {
      morse = morse + '.';
    }
  }
  } else {
    res_text = res_text + " ";
  }
  for (let code in MORSE_TABLE) {
    if (code === morse)
    res_text = res_text + MORSE_TABLE[code];  
  }
}
return res_text;
    // write your solution here
}

module.exports = {
    decode
}
