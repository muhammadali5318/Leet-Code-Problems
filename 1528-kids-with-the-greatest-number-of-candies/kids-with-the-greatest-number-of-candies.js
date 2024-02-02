/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const result = []
    let maxCandy = Math.max(...candies)

    for (let i = 0; i < candies.length; i++) {
        result.push(extraCandies + candies[i] >= maxCandy)
    }
    return result;
};