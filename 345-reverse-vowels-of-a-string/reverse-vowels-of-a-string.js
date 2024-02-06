/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s1) {
  let s = s1.split('')
  const vowels = [];
  const newString = s.map((char, i) => {
    if (
      char.toLowerCase() === "a" ||
      char.toLowerCase() === "e" ||
      char.toLowerCase() === "i" ||
      char.toLowerCase() === "o" ||
      char.toLowerCase() === "u"
    ) {
      vowels.push(char);
      return true;
    }
    return char
  });
  const s2 = mergeString(vowels, newString)
return s2.join(""); 

};

const mergeString = (vowels, str) => {
  const reveresedArray = vowels.reverse();


  let count = 0;
  const orignalStr = str.map((char) => {
    if(char === true){
      let index = count
      count++
      return reveresedArray[index]
    }
    return char
  })
  return orignalStr;

}

