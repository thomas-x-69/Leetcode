/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(c) {
    let counter = 0
    let max = 0
    let res = 0
    for(i=0;i<c.length;i++)
    {
        if(c[i]=="Y")
        {
            counter++
          
            if (counter>0)
            {
                res = i +1
                counter = 0
            }

        }
        else counter--


    }
    return res
};