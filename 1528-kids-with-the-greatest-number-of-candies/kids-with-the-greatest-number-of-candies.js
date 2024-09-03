/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    const greatestNoOfCandies = Math.max(...candies)

    const newCandies = candies.map(candy => (candy += extraCandies) >= greatestNoOfCandies)

    return newCandies;
};