/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let ReveresedString = s.split(' ')
   ReveresedString = ReveresedString.map((word) => {
    if(word === ''){
      return null
    }
    return word.trim();
  }).filter((word) => word !== null);;
  ReveresedString = ReveresedString.reverse()
  ReveresedString = ReveresedString.join(' ')
  return ReveresedString;
    
};