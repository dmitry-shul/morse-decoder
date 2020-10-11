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
    let morse = expr;

    let dot = '.';
    let dash = '-';

    let litNum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    let morseLitNum = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','-----','.----','..---','...--','....-','.....','-....','--...','---..','----.'];

    let result = '';
    let i = 0;
    while (i < expr.length / 10) {
    let first10 = morse.slice(0,10);
    morse = morse.slice(10,morse.length);
    
    if (first10 === '**********') {
        result = result + ' ';
    } else {
    
        let del0 = first10;
        let i2 = 0;
        while (i2 < first10.length) {
            if (del0[0] === '0') {
            del0 = del0.substr(1);
            }
            i2++;
        }
        
        let morseCode = '';
        let i3 = 0;
        let p = 0;
        let pp = 1;
        while (i3 < del0.length / 2) {
            if (del0[p] === '1' && del0[pp] === '0') {
                morseCode = morseCode + '.';
            } else if (del0[p] === '1' && del0[pp] === '1') {
                morseCode = morseCode + '-';
            }
            p = p + 2;
            pp = pp + 2;
            i3++;
        }
        
        let i4 = 0;
        while (i4 < morseLitNum.length) {
            if (morseCode === morseLitNum[i4]) {
                result = result + litNum[i4];
                break;
            }
            i4++;
        }
    }
    
    i++;
    }
    return result;
}

module.exports = {
    decode
}