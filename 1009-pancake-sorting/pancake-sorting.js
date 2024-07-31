var pancakeSort = function(arr) {
    
    let res = [];
    
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] !== i + 1){
            let j = arr.indexOf(i + 1);
            arr = [...arr.slice(0, j + 1).reverse(), ...arr.slice(j + 1)];
            arr = [...arr.slice(0, i + 1).reverse(), ...arr.slice(i + 1)];
            res.push(j + 1);
            res.push(i + 1);
        }
    }
        return res;
};