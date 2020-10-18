exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    let result = str[0];
    let dictionary = {};
    dictionary[result] = 1;

    for (let index = 1; index < str.length; index++) {
      const previousLetter = str[index - 1];
      const currentLetter = str[index];

      if (previousLetter !== currentLetter) {
        dictionary[previousLetter] = 0;
      }
      dictionary[currentLetter] = dictionary[currentLetter]
        ? dictionary[currentLetter] + 1
        : 1;
      result += dictionary[currentLetter] <= amount ? currentLetter : "";
    }

    return result;
  },

  wordWrap: function (str, cols) {
    let result = "";

    let wordArray = str.split(" ");

    result = wordArray[0];

    for (let index = 1; index < wordArray.length; index++) {
      const currentWord = wordArray[index];

      if (currentWord.length > cols) {
        result += "\n" + currentWord;
      } else {
        if (currentWord.length + result.length > cols) {
          result += "\n" + currentWord;
        } else {
          result += " " + currentWord;
        }
      }
    }

    return result;
  },

  reverseString: function (str) {
    let result = "";

    for (let index = str.length - 1; index >= 0; index--) {
      const currentLetter = str[index];
      result = result + currentLetter;
    }
    return result;
  },
};
