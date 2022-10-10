function caesarCypher(secret, shift){ //(string, number of letters I should shift by) //3
    const alphabet = "abcdefghijklmnopqrstuvwxyz" 
                    
    //a b c d e f g h i j k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z    
    //0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
    let encrypted = ""; //"deg"
    //look at each letter 
    for (let i = 0; i < secret.length; i++){
      let currentLetter = secret[i]; 
    //find where letter is in the alphabet
      let positionInAlpha = alphabet.indexOf(currentLetter); //1
      //if this character is in the alphabet
      if (alphabet.includes(currentLetter)) {
        let encryptedPosition = (positionInAlpha + shift) % 26 // 28 % 26 ==> 2
        let shiftedLetter = alphabet[encryptedPosition]   
        encrypted += shiftedLetter
      } else {
        encrypted += " "
      }
    }
    
    //return encrypted string
    return encrypted; 
  } 