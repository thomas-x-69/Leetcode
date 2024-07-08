/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let friends = Array.from({ length: n }, (_, i) => i + 1);
    let current_position = 0;
    
    while (n > 1) {
        current_position = (current_position + (k - 1)) % n;
        friends.splice(current_position, 1);
        n--;
    }
    
    return friends[0];
};