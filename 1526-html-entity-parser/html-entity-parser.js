/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    return text.replaceAll("&apos;","'").replaceAll("&quot;",'"').replaceAll("&gt;",'>').replaceAll("&lt;",'<').replaceAll("&frasl;",'/').replaceAll("&amp;","&")
};