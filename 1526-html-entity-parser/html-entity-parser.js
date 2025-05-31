/**
 * @param {string} text
 * @return {string}
 */
const entityParser = (text) => text.replaceAll("&apos;","'").replaceAll("&quot;",'"').replaceAll("&gt;",'>').replaceAll("&lt;",'<').replaceAll("&frasl;",'/').replaceAll("&amp;","&")