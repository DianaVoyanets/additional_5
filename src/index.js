module.exports = function check(str, bracketsConfig) {
  var openingBrackets = {},
      closingBrackets = {},
      poll = [];

  bracketsConfig.forEach((bracket) => { 
      openingBrackets[bracket[0]] = bracket[1];
      closingBrackets[bracket[1]] = bracket[0];
  });
      
  for (var i = 0; i < str.length; i++) {
      var bracket = str[i],
          endBracket = closingBrackets[bracket];

      if (endBracket && (bracket !== endBracket || poll[poll.length - 1] === endBracket)) {
          endBracket = poll.pop();

          if (bracket !== openingBrackets[endBracket]) {
              return false;
          }
      } else {
          poll.push(bracket);
      }
  }

  return poll.length === 0;
}