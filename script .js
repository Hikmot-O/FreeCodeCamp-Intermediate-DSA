"use strict";

//Intermediate DSA 1//
function sumAll(arr) {
  let sum = 0;

  const sortNumbers = (a, b) => {
    return a - b;
  };
  arr.sort(sortNumbers);

  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
sumAll([4, 1]);

//Intermediate DSA 2//
function diffArray(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Intermediate DSA 3//
function destroyer(arr, ...arg) {
  let newArr = [];

  for(let i=0; i<arr.length; i++){
    if(!arg.includes(arr[i])) newArr.push(arr[i])
  }
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Intermediate DSA 5//
function spinalCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' '|| str[i] === '_') str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2, str.length);

  }

  str = str[0].toLowerCase() + str.slice(1).replaceAll(' ', '').replaceAll('_', '');
  str = str.replace(/[A-Z]/g, s => '-' + s.toLowerCase())
  return str;
}
spinalCase('This Is Spinal Tap');

//Intermediate DSA 6//
function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if(vowels.includes(str[0])){
    str = str + 'way';
  }else{
    for(let i=0; i<str.length; i++){
      if(vowels.includes(str[i])){
        str = str.slice(i, str.length) + str.slice(0, i) + 'ay';
        break;
      }

      if(!vowels.includes(str[i]) && i === str.length - 1){
        str = str + 'ay';
        break;
      }
    }
  }
  return str;
}
translatePigLatin("consonant");

//Intermediate DSA 7//
function myReplace(str, before, after) {
  let strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === before) {
      if (strArr[i][0] === strArr[i][0].toUpperCase()) {
        strArr[i] = after[0].toUpperCase() + after.slice(1);
      } else {
        strArr[i] = after[0].toLowerCase() + after.slice(1);
      }
    }
  }
  return strArr.join(' ');
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//Intermediate DSA 8//
function pairElement(str) {
  let DNA = [];

  for(let i=0; i<str.length; i++){
    if(str[i] === 'A') DNA.push([str[i], 'T'])
    if(str[i] === 'T') DNA.push([str[i], 'A'])
    if(str[i] === 'G') DNA.push([str[i], 'C'])
    if(str[i] === 'C') DNA.push([str[i], 'G'])
  }
  return DNA;
}
pairElement("GCG");
