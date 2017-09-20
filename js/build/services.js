app.factory('PigLatinFilterService', [
  function() {

    var getPigFilteredData = function (data) {

      var convertedData, vowels = "aeiou";
      var firstChar = data.charAt(0);

      if(vowels.indexOf(firstChar) >= 0 ){
        // first character is vowel then add "way" in the end of the string
        convertedData = data + "way";

      } else {
        // first character is consonant

        var prefixStr, suffixStr;
        for(var i=0;i<data.length; i++) {
          if(vowels.indexOf(data[i]) >= 0){
            break;
          }
        }

        if(i !== data.length) {
          //  extract the string before the first occurence of the vowel and then add it at the end of the string, then add "ay"
          suffixStr = data.substr(0, i);
          prefixStr = data.substr(i, data.length - i);
          convertedData = prefixStr + suffixStr + "ay";
        } else {
        // if there are no vowels in the string then print the string as it is.
          convertedData = data;
        } 
      }

      return convertedData;

    };

    var splitSentence = function(sentence){
      var words = sentence.split(" ");
      return words;
    };

    var getPigFilteredDataSentence = function(data) {
      if(data.indexOf(' ') > -1){
        // sentence
        var words = splitSentence(data);
        var convertedData = "";
        for(var i=0;i <words.length; i++){
          convertedData += getPigFilteredData(words[i]);
          if(i<words.length - 1){
            convertedData += " ";  
          }
        }

        return convertedData;

      } else {
        //single word
        return getPigFilteredData(data);
      }
    };

    return {
      getPigFilteredDataSentence: getPigFilteredDataSentence,
      getPigFilteredData: getPigFilteredData
    };
  }
]);