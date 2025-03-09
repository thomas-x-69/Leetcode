/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
     let arr = []

    for(i=0;i<trips.length;i++)
    {
     let [j,first, last] = trips[i];
     while (first < last) {
        if (!arr[first]){arr[first] = 0}
            arr[first] += j;
            first++;
        }
    }
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]>capacity)return false

  }
  return true

};