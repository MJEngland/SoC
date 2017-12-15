explanation
===========
take an input as a string, which will be at least 1 character long (ie, don't worry about empty string inputs)
output a string that has  all vowels moved to the end of the string in the same order
example: apple should return pplae
Algorithm
=========
1) split input with no character, ie ''
2) create an empty array called output
3) create an empty string called vowels
4) for each element in the array,
    a) create a function that takes in the value and the index,

    b) match against vowels in regex, ie /[aeiou]/
    c) if it DOES match add the current value to vowels

    d)if it does NOT match push the current value to output
5) join output with no character, ie ''
6) add vowels to output
7) return output
