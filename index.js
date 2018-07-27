 // add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
    for (let i = 0; i < musicians.length && i < instruments.length; i++) {
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
   }
  return emptyArray
}  
  
function johnLennonFacts(facts) {
const shoutedFacts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
}

function iLoveTheBeatles(n) {
 var arr = [] 
 do {n++
   arr.push(`I love the Beatles!`)
  } while (n < 15)
return arr
}