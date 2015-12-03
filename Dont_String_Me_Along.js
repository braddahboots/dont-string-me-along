// function that finds the missing numbers in the string above
var str = '9899100101103104104';

function missing(str) {
  var returnArray = [];
  for (var i = 0; i < 10; i++) {
    if(str.search(i) === -1) {
      returnArray.push(i);
    }
  }
  console.log(returnArray);
  return returnArray;
}

missing(str);

// function that takes a string of two words and swaps their order

var str = 'Jay Won';

function swapWords(words) {
  var splitStr = words.split(' ');
  var holdA;
  var holdB;
  var newStr;

  for(var i = 0; i < splitStr.length; i++) {
    holdA = splitStr[0];
    holdB = splitStr[1];
    newStr = holdB + ', ' + holdA;
  }
  console.log(newStr);
  return newStr;
}

swapWords(str);

// function that takes 2 strings

var str1 = 'asba';
var str2 = 'bananas';

function cirvVar(x, y) {
  var newStr = y + y;

  if(newStr.search(x) === -1) {
    console.log('false');
    return false;
  } else {
    console.log('true');
    return true;
  }
}

cirvVar(str1, str2);

// function that takes a single word and test if it's a palindrome

var str1 = 'apples';
var str2 = 'starrats';

function palindrome(str) {
  var revStr = str.split('').reverse().join('');

  if(revStr === str) {
    console.log(revStr);
    return revStr;
  } else {
    console.log('false');
    return false;
  }
}

palindrome(str2);

