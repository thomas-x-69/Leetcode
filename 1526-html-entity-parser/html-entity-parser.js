/**
 * @param {string} text
 * @return {string}
 */
var entityParser = (text) => text.replaceAll("&apos;","'").replaceAll("&quot;",'"').replaceAll("&gt;",'>').replaceAll("&lt;",'<').replaceAll("&frasl;",'/').replaceAll("&amp;","&")