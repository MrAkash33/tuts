// const array = []

// const array = new Array(
//     {"name":"akash"},
//     {"name":"ayush"}
//     )
// console.log(Array.isArray(array) )

// const object = {
    
// }

// const object = Object(
//     {"HELLO":"HII"}
//     )
// console.log(object)

// const arr = Array(5).fill("aksh")
// console.log(arr)

// const arr = [1,2,4,5,6]

// console.log(arr.indexOf(4))

// const fruits = ['banana', 'orange', 'mango', 'lemon']

// const mui = fruits.indexOf('banana')
// if(mui != -1){
//     console.log("banana exist")
// }else{
//     console.log("do not exist")
// }
// const ar = [10,5,6,7,8,69]
// if(ar.includes(10)){
//     console.log("includes your number")
// }
// // console.log(ar.slice(0,5))
// console.log(ar.splice(0,1))
const emptyArray = []

const array = [6,7,8,9,5,3,0]
// console.log(array.length)
// console.log(array[0])
// console.log(array[array.length -1])
// console.log(array[4])
// const mixeddataType = [1,'akash',{"name":"akash"},1.05,false]
// console.log(mixeddataType.length)

const itCompanies = ['Facebook',"Google","Microsoft","Apple","IBM","ORacle","Amazon"]
// itCompanies.push('and')
// console.log(itCompanies.join(','))
// const itCom = itCompanies.join(',');
// console.log(itCom)
// const string = 'Google';
// const check = itCompanies.indexOf(string)
// if(check !== -1){
//     console.log("company Exist")
// }

const checkIf = itCompanies.includes('Facebook')
console.log(checkIf)
if(checkIf){
    console.log("yes The have two ooo")
}else{
    console.log("not have two oo")
}

// console.log(itCompanies.sort())
// console.log(itCompanies.slice(0,3))
// console.log(itCompanies.reverse())
// console.log(itCompanies.slice(0,3))
// console.log(itCompanies[3])
// itCompanies.shift()
itCompanies.splice(3,1)
console.log(itCompanies)

// console.log("Heloo",webTechs)
// console.log("Heloo",countries)

// console.log(webTechs.concat(countries))

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = text.split(' ')
// console.log(words,words.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// // shoppingCart.splice(4,4)
// shoppingCart.splice(3,3,'Modify Green Tea')
// console.log(shoppingCart)

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]

//   const checkArray = countries.includes('Ethiopia');
//   if(checkArray){
//     console.log('ETHIOPIA')
//   }

// const check2 = webTechs.includes('SAAS')

// if(check2){
//     console.log("no")
// }else{
//     console.log(webTechs)
// }

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullstack = frontEnd.concat(backEnd)
// console.log(fullstack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 

const sort = ages.sort()

console.log(sort,"ssort")

for(var i = 0; sort.length < 0 ; i++){
    console.log(sort[i] ,"Akash")
}
