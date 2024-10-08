// let num = 42
// let firstName = 'Dima'
//  console.log('Test:', firstName)

// console.log(num)
// console.log(typeof firstName)
 
const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'




plusBtn.onclick = function() {
    action = '+'

}

minusBtn.onclick = function() {
    action = '-'

}


function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result 
}


function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = +inp1.value
    const num2 = Number(inp2.value)
    if (actionSymbol === '+') {
        return num1 + num2
    } else if (actionSymbol === '-') {
        return num1 - num2
    }
}


submitBtn.onclick = function() {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
    // if (action === '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else if (action === '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)

    // }


    
}


// let num = 10;
// // let multyplyBy2 = (x) => x * 2;
// function multyplyBy2(x) {
//     return x * 2;
// }
// let result = multyplyBy2(num);
// console.log(result)



// const array = [1, 2, 3, 344545, 6]
// console.log(array[array.length-1])


const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
 
const notes = ['записати блок про массиви', 'розповісти теорію']

function render() {
    // for (let index = 0; index < notes.length; index++) {
    //     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[index]))
    // }
    for (const note of notes) {
        listElement.insertAdjacentHTML('beforeend',getNoteTemplate(note))

    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length ===  0) {
        return
    }
    // listElement.innerHTML = 
    listElement.insertAdjacentHTML('beforeend',getNoteTemplate(inputElement.value)
    
    )
    inputElement.value = ''
}


function getNoteTemplate(title) {
    return `
        <li>
            <span>${title}</span>
            <span>
                <span>&check;</span>
                <span>&times;</span>
            </span>
            
        </li>
`
}


// const names = ['dima', 'yulia', 'lena']
// const capitelNames = names.map((name) => name.toUpperCase()

// )

// console.log(names)
// console.log(capitelNames)


console.log(Math.random())


function getRendomNamber(min, max) {
    return  Math.floor(Math.random() * (max - min + 1) +min
    )
}

const num1 = getRendomNamber(10, 100)
console.log(num1)

function greet(name) {
    console.log('Hello -', name)
}

greet('dima')

// const sum = (a, b) => a + b;
// console.log(sum(100, 3))

// function sum(a, b) {
//     return a + b
// }
// console.log(sum(12, 34))

function sumAll(...numbers) {
    console.log(numbers)
    return numbers.reduce((acc, curr) => (acc += curr), 0)
}

console.log(sumAll(12, 23, 3, 5))

// console.log(new Date())




// let mode = 'full'
// const output = document.getElementById('output');
// const fullBtn = document.getElementById('full');
// const dateBtn = document.getElementById('date');

// fullBtn.onclick = function() {
//     mode = 'full'
// }

// output.textContent = new Date()


// setInterval(() => {
//     output.textContent = new Date()
// }, 1000)

// function format(formatMode) {
//     switch (formatMode) {
//         case 'time':
//             return now.toLocateTimeString()
//             break;
//         case 'full':

//         default:
//             break;
//     }
// }


const person = {
    name: 'dima',
    age: 38,
    languages: ['uk', 'en']
}

console.log('person name', this.name)

const {name, age, languages} = person;



// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// const car = {
//     model: 'Tesla',
//     year: 2023,
// }

// const json = JSON.stringify(car);
// const parsed = JSON.parse(json);
// console.log(json)
// console.log(car)





const list = document.querySelector('#list5');
const filter = document.querySelector('#filter');

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
})


async function start() {
    list.innerHTML = 'Loading....'
    try {
       const resp = await fetch('https://jsonplaceholder.typicode.com/users')
       console.log(resp)
       const data = await resp.json()
       setTimeout(() => {
        renders(data)
       }, 3000)
    } catch (error) {
        list.style.color = 'red'
        list.innerHTML = error.message
    }
}


function renders(users = []) {
    if (users.length === 0) {
        list.innerHTML = 'No matched users!'
    } else {
        const html = users.map(toHTML).join('')
        list.innerHTML = html
    }
}


function toHTML(user) {
    return `
        <li class='list-group-item'>${user.name}</li>
    `
}

start()




// async function asyncExample() {
//     try {
//         await getData()
//     } catch (error) {
//         console.log(error)
//     }finally {

//     }
// }

