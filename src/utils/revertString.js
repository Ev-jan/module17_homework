export function revertString(str) {
  if (str == " " || typeof str !== 'string') {
    return ("incorrect input, enter a valid string")
  } else {
    let revertedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revertedStr += str[i];
    }
    return revertedStr;
  }
}