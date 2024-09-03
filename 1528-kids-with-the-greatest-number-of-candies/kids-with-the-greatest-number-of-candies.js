/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    const greatestCandy = Math.max(...candies)

    const newCandies = candies.map(candy => (candy + extraCandies) >= greatestCandy)

    return newCandies;
};