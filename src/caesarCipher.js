// const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function caesarCipher(str) {
    let caesarString =  '';
    const regex = /\_|([0-9])|\W+/g;

    for(let char=0; char < str.length; char++) {
        if(str[char].match(regex)) {
            caesarString += str[char];
        }
        else if(str[char] === 'z'){ 
            caesarString += 'a';
        }
        else if(str[char] === 'Z'){ 
            caesarString += 'A';
        }
        else if(str[char] === str[char].toUpperCase()) {
            caesarString += String.fromCharCode((str.charCodeAt(char) + 1 - 65) %25 + 65);
        }
        else {
            caesarString += String.fromCharCode((str.charCodeAt(char) + 1 - 97) %25 + 97);
        }
    }
    
    return caesarString;
}

module.exports = caesarCipher;

