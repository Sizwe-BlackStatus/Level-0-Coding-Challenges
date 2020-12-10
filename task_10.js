function vowels(str) {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let strVowel = "";
  str = str.toLowerCase();
  vowelArr.forEach((vowel) => {
    if (str.includes(vowel)) {
      strVowel += vowel;
    }
  });
  return strVowel;
}
