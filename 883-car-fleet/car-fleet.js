/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // (target - position[0])/position[1]
    const cars = position.map((pos, i) => [pos, speed[i]]);
    let time = cars.sort((a, b) => b[0] - a[0]).map((a)=>(target - a[0])/a[1])
    // console.log(time)
    let res = [time[0]]
    // in the loop if current is bigger than the last char in the array then push to the result
    for(i=1;i<time.length;i++)
    {
        if(time[i]>res[res.length-1]) res.push(time[i])

    }
    // console.log(res)
    // at the
    return res.length
};