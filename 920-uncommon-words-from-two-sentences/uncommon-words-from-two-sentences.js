/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let arr =s1.split(" ").concat(s2.split(" ")).sort()
  console.log(arr)
  let res = []
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]!=arr[i+1]&&arr[i]!=arr[i-1])
    {
      res.push(arr[i])
    } 
  }
  return res
};