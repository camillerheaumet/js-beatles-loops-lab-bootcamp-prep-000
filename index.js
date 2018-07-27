 // add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
    for (let i = 0; i < musicians.length && i < instruments.length; i++) {
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
   }
  return emptyArray
}  
  
function johnLennonFacts(i) {

  const facts = [
  ];
  let i=0
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