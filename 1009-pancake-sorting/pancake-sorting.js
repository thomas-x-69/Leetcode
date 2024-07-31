/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    let flip = (end)=>{
         for(let i=0;i<end;i++){
             [arr[i],arr[end]]=[arr[end],arr[i]]
             end--
         }
    }
    let findMax = (end)=>{
        let max = 0
        let maxInd = 0
        for(let i=0;i<=end;i++){
            if(arr[i]>=max){
                maxInd = i
            }
            max = Math.max(arr[i],max)
            
        }
        return maxInd
    }
    let flips = [];
    for(let i = arr.length -1; i >= 0; i-- ){
        let maxInd = findMax(i);
        if(i !== maxInd){
            flip(maxInd);
            flips.push(maxInd+1);
            flip(i)
            flips.push(i+1);
        }
    }
    return flips;
};