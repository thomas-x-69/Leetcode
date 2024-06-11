/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    const n = customers.length;
    
    let happy = 0;
    let angry = 0;
    let left = 0; 
    let max = 0; 
    for (i = 0; i < n; i++) {
    const owner = grumpy[i]; 
    const current = customers[i];
    if (i >= minutes) { 
            if (grumpy[left] == 1) angry -= customers[left];
            left++;
        }
        
        if (owner == 0) {
            happy += current;
        } else {
            angry += current;
            max = Math.max(max, angry);
        }
    }
    
    return happy + max;
};