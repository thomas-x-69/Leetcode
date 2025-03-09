/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let arr = new Array(n).fill(0)

    for(i=0;i<bookings.length;i++)
    {
     let [first, last, j] = bookings[i];
     while (first <= last) {
            arr[first - 1] += j;
            first++;
        }
    }
  
    return arr

};