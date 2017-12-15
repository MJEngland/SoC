const data = [
  {name:"Chris" , score: 10},
  {name:"Scott" , score: 50},
  {name:"Leigh" , score: 75},
  {name:"Matthew" , score: 10},
  {name:"Victoria" , score: 10},
  {name:"Ashleigh" , score: 10},
  {name:"Lily" , score: 30},
]

//====================================
//Error Handling
//====================================
function checkInput(input){
  if (!input) {
    return false;
  }
  if (!Array.isArray(input)) {
    return false;
  }
  return true;
}

//======================================
//Map
//======================================
function getNames (input) {
  if (!checkInput(input)) {
    return 'Error with input';
  }
  return input.map(function(item, index){
    return item.name;
  })
}


function getScores (input) {
  if (!checkInput(input)) {
    return 'error with the input';
  }
  return input.map(function(item, index){
    return item.score;
  })
}



//=================================
//filter
//=================================
//Return true or fulse - if true returns all array - if false returns nothing

function searchByName(input, search) {
  if (!checkInput(input)) {
    return 'Error with input';
  }
  return input.filter(function(item, index){
    return item.name === search;
  })
}

//Case insesitive

function SearchCI(input, search){
  if (!checkInput(input)) {
    return 'Error with input';
  }
  const lcSearch = search.toLowerCase();
  return input.filter(function(item, index){
    return item.name.toLowerCase() === lcSearch;
  })
}

//Partial search terms

function SearchCIPartial(input, search){
  if (!checkInput(input)) {
    return 'Error with input';
  }
  const lcSearch = search.toLowerCase();
  return input.filter(function(item, index){
    return item.name.toLowerCase().includes(lcSearch);
  })
}

//======================================================
//Reduce
//======================================================

function scoreTotal (input) {
  if (!checkInput(input)) {
    return 'Error with input';
  }
  return input.reduce(function(acc, cur){
    return acc + cur.score;
  }, 0)
}

//Search for a specific score.

function searchAndScore(input, search){
  if (!checkInput(input)) {
    return 'Error with input';
  }
  return scoreTotal(SearchCIPartial(input, search));
};


const names = getNames(data);
console.log(names);
const scores = getScores(data);
console.log(scores);
console.log('Search Result', searchByName(data, 'Matthew'));
console.log('Search Result', SearchCI(data, 'matthew'));
console.log('Search Result', SearchCIPartial(data, 'i'));
console.log('score', scoreTotal(data));

console.log('Filtered score', searchAndScore(data, 'Matthew'));
