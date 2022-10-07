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
   var disabl =  false
        function val1(e){
            const d = document.getElementById("value1").value;
            return d.length
        }
        function val2(e){
           const dd = document.getElementById("value2").value;
            return dd.length
        }
        function val3(e){
            const cc = document.getElementById("value3").value;
            return cc.length
        }        
        setInterval(()=>{
            if(val1() > 0 && val2() > 0 && val3() > 0){
                document.getElementById("saved").removeAttribute("disabled");
            }
        },1000)

            let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
            const words = text.split(' ');
            console.log(words)
            console.log(words.length)

            const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

            shoppingCart.unshift('Meat')
            shoppingCart.push('Sugar')
            shoppingCart.splice(4,0,'Cream')
            console.log(shoppingCart);


            const countries = [
                'Afghanistan',
                'Albania',
                'Algeria',
                'Andorra',
                'Angola',
                'Antigua and Barbuda',
                'Argentina',
                'Armenia',
                'Australia',
                'Austria',
                'Azerbaijan',
                'Bahamas',
                'Bahrain',
                'Bangladesh',
                'Barbados',
                'Zimbabwe'
                ]
                console.log(countries.length)
                if(countries.includes('Ethisopia')){
                    console.log("Yes Exist")
                }
                if(countries.includes('Finland')){
                    console.log("finland")
                }
                const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
                // console.log(ages.sort())
                // console.log(ages[0],"Here is Min Age")
                // console.log(ages[ages.length -1],"Here is Max Age")
                // console.log(countries.slice(0,10))
                // console.log(countries[countries.length-1/2])
                // const middleCountry = countries[Math.floor(countries.length/2)];
                // console.log(middleCountry)
                // const middleIndex = Math.ceil(countries.length /2)
                // const half = countries.splice(0,middleIndex)
                // const Otherhalf = countries.splice(-middleIndex)
                // console.log(half,"Break",Otherhalf)
                // console.log(middleIndex,"middleIndex")
                const firstDigit = Math.ceil(countries.length / 3);
                const firstPart =  countries.splice(-firstDigit)
                const secondPart = countries.splice(-firstDigit)
                const thirdPart = countries
                console.log(firstDigit,secondPart,thirdPart)
