/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let cows = 0
    let bulls = 0

      let arr = Array(10).fill(0);
 for (let i=0; i<secret.length; i++) {

       let gu = parseInt(guess[i]);
       
       let sec = parseInt(secret[i]);

       if (sec == gu) {
           bulls++;
           continue;
       }
        if (arr[sec] < 0) { 
           cows++;
       }
       
       if (arr[gu] > 0) {    
           cows++;
       }
       arr[sec]++
       arr[gu]--
       
 }
       

   return (`${bulls}A${cows}B`);
};