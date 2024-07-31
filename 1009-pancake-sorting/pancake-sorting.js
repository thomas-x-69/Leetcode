var pancakeSort = function(arr) {
    
    
    let res = [];
    
    //iterate through arr from arr.length - 1 to 0;
    for (let i = arr.length - 1; i >= 0; i--){
        //if the number i + 1 isn't on index i that tells us that number isn't on the right place;
        if (arr[i] !== i + 1){
            //find the number i + 1 on arr; assign the index of i + 1 variable j;
            let j = arr.indexOf(i + 1);
            //reverse the part of arr[0...j] inclusive;
            //this makes sure that number i + 1 is on arr[0];
            arr = [...arr.slice(0, j + 1).reverse(), ...arr.slice(j + 1)];
            //reverse the part of arr[0...i], inclusive;
            //this makes sure that the number i + 1 ends up on index i;
            arr = [...arr.slice(0, i + 1).reverse(), ...arr.slice(i + 1)];
            //push pancake flips to res, j + 1 and i + 1 because they correspond to j and i indices on arr;
            res.push(j + 1);
            res.push(i + 1);
        }
    }
    
    //return res arr
    return res;
};