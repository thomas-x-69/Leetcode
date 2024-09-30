/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
    };

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {

    if (this.stack.length < this.maxSize) this.stack.push(x);

};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {

     if (this.stack.length > 0) {
        let value = this.stack.pop();
        return value;
    } else return -1;

};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
     let x = Math.min(k, this.stack.length);
    for (let i = 0; i < x; i++) {
        this.stack[i] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */