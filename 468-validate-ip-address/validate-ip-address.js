/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(IP) {

    return (/^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/).test(IP + '.') 
    ? 'IPv4' : (/^([\da-f]{1,4}:){8}$/i).test(IP + ':') ? 'IPv6' : 'Neither';
    };