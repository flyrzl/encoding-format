// '𝌆' 
// unicode: U+1d306, utf-16: d834df06, ucs-2: two char, d834 and df06.
console.log('\u1d306') // code points, fail because of 4-byte
console.log('\u{1d306}') // ES6 provides this way to recognize 4-byte code points automatically
console.log('\ud834df06') // utf-16, false
console.log('\ud834\udf06') // ucs-2, -> '𝌆'
console.log('𝌆'.charCodeAt(0)) // -> 0xd834