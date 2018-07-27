 // add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
    for (let i = 0; i < musicians.length && i < instruments.length; i++) {
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
   }
  return emptyArray
}  
  
function johnLennonFacts(i) {

  const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  while ( i < facts.length) {
    facts.push(`${facts[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
 var arr = [] 
 do {n++
   arr.push(`I love the Beatles!`)
  } while (n < 15)
return arr
}