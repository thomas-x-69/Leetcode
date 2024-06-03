/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    let res = s
    	if (k === 1) {
		let len = s.length;
		for (i=0; i<len; i++) {
			let c = s[0];
			s = s.substring(1) + c;
			if (s < res)
				res = s; 
		}

		return res;
	}

    return [...s].sort().join("")
};