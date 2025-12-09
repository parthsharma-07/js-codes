const name="hitesh"
const repocount=50

// console.log(name+repocount+"value")

// console.log(`hello my name is ${name} and rrepocount is ${repocount}`)

const gameName=new String('hiteshhc')
console.log(typeof name )
console.log(typeof gameName)
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))
// using substring and string slicing 
const newWord=gameName.substring(0,5)  //aakhri wala not includeud
console.log(newWord)
let anotherstring= new String(gameName)
anotherstring=anotherstring.slice(-8,-4)
console.log(anotherstring)

const url="iterate-train-97j9995wq5q4fxrq4.github.dev"
console.log(url.replace('97j','4r'))
// ye functions directly string ko change nhi karte 
console.log(url) // original string wil come out


// includes -> check weather a word comes in string or not'
console.log(url.includes("hit")) // this will give true
  