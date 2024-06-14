/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
        let max = 0;

    let map = new Map();
    let count = 0, obj = {}, end = 0, total = 0, lastElement, initialElement;
    while (end < fruits.length) {
        if (map.get(fruits[end]) >= 0) {
            if (fruits[end] !== lastElement) {
                map.set(fruits[end], end);
                initialElement = lastElement;
                lastElement = fruits[end];
            }
        } else {
            if (count == 2) {
                max = Math.max(max, total);
                map.delete(initialElement);
                total = end - map.get(lastElement);
            } else {
                count++;
            }
            initialElement = lastElement;
            lastElement = fruits[end];
            map.set(fruits[end], end);
        }
        total++;
        end++;
    }
    max = Math.max(max, total)
    return max;
};