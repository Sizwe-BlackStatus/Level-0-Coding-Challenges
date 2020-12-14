function commonChar(str1, str2) {
  let strArr = str2.split("");
  let commonCharArr = [];
  strArr.forEach((letter) => {
    if (str1.includes(letter)) {
      commonCharArr.push(letter);
    }
  });
  let commonCharStr = commonCharArr.join(",");
  return 'Common letters: ' + commonCharStr;
}
