const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let casedArray = []
const titleCased = () => {
  for (let x = 0; x<tutorials.length; x++) {
    let words = tutorials[x].split(' ')

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }

    let newTutorialString = words.join(' ')

    casedArray.push(newTutorialString)
  }
  return casedArray
}


// const titleCased = () => {
//   tutorials.map(string => {
//     for (letters of string) {
//       let newString = ''
//       if (letter === ' ') {
//         let letterIndex = indexOf.letter()
//         string[letterIndex + 1] = letter[letterIndex + 1].toUpperCase
//       }
//     }
//     return `${toUpperCase.string[0]}`
//   })
//   return tutorials
// }

// const titleCased = () => {
//   let array = []
//   for (let x = 0; x < tutorials[0].length; x++) {
//     if (tutorials[0][x] === ' ') {
//       array.push(x+1)
//     }
//   }
  
//   // let newString = tutorials[0].slice(0, array[0]) + tutorials[0][array[0]].toUpperCase() + tutorials[0].slice(array[0]+1, tutorials[0].length)
//   // console.log(newString)
  
//   function addSomeCaps() {
//     let newString = tutorials[0]
//     for (indexValue of array) {
//       newString = tutorials[0].slice(0, indexValue) + tutorials[0][indexValue].toUpperCase() + tutorials[0].slice(indexValue+1, tutorials[0].length);
//     }  
//     console.log(newString);
//   }
//   addSomeCaps()
  
//   console.log(`${tutorials[0][0].toUpperCase()}${tutorials[0].slice(1)}`)
// }