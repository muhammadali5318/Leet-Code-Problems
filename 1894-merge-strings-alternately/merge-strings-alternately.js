/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
   let l1 = word1.length;
    let l2 = word2.length;
    let loopSize = Math.min(l1, l2);
    let sumOfString = "";

    for (let i = 0; i < loopSize; i++) {
        sumOfString += word1[i] + word2[i];
    }
    
    if (l1 > l2) {
        sumOfString += word1.substring(loopSize);
    } else {
        sumOfString += word2.substring(loopSize);
    }
    
    return sumOfString;
};