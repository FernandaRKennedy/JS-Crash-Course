
// console.log('hello');
// console.error('this is a error');
// console.warn('this is a warning')

//var(is globaly scoped not used anymore), 
//let(reasine values ), const(cant be changed, only dont use const when you know you will reasine the value)

//let
// let age = 30;
// age =31;
// console.log(age);
// //const need to use a value to ultilize it
// const idade =30;
// console.log(idade)

//primitive data types
//strings, numbers, boolean, null, undefined and symble ES6

// const name = 'nanda';
// const age = 30;
// const rating = 4.5 
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name )

// const name = 'nanda';
// const age = 29;
// //concatenation 
// console.log('my name is '+ name +' and my age is '+ age);
// //template string
// console.log(`my name is ${name} and I am ${age}`)

// a proprety doesn't have parentesis if it has it is a method 
//.length
// const s = 'hello word';
// console.log(s.length);
// console.log(s.toLocaleUpperCase());
// console.log(s.toLocaleLowerCase);
// console.log(s.substring(0,5));
// console.log(s.split(''));

//arrays- variables that hold multiple values 

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears']
// fruits [3] ='grapes';
// fruits.push('mangos');//add in the end
// fruits.unshift('banana');//add in the beggining
// fruits.pop();//pop the last one of 
// console.log(Array.isArray('hello'))//check if it is a array
// console.log(fruits.indexOf('oranges'))//check the index 
// console.log(fruits);

//object literals 
// const person = {
//     firstName: 'Fernanda',
//     lastName: 'kennedy',
//     age: 29,
//     hobbies:['music', 'movies', 'sports'],
//     address:{
//         street:'50main',
//         city: 'boston',
//         state:'ma'

//     }
// }
// console.log(person);
// console.log(person.lastName, person.firstName)
// console.log(person.hobbies[1])//is getting the movies value

// const{ firstName, lastName, address:{city}}= person;
// console.log(firstName)//advenced es6

// person.email ='nananda@gmail.com' //add proprety
// console.log(person);

//arrays of object literals
// const todos = [
//     {
//         id:1,
//         text:'take out trash',
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:'meeting woth boss',
//         isCompleted:true
//     },
//     {
//         id:3,
//         text:'dentist appointment ',
//         isCompleted:false
//     }
// ]
// console.log(todos[1].text);

//json to get ready for our server 
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)


// //for loop: 
//  for(let i = 0; i < 10; i++){
// // console.log(i);
// console.log(`forloop Number : ${i}`)//templet string
//  }

 //while: set the variable outside the loop
//  let i = 0;
//  while(i < 10){
//     console.log(`whileloop Number : ${i}`);
//     i++;
//  }
 
// for(let i = 0; i < todos.length; i++){//looping trought the array 

//  console.log(todos[i].text)
// }
  
// for(let todo of todos){
// console.log(todo.text)
// }

//high order array methods: forEach, map, filter

 //forEch:just loop through the array 
// todos.forEach(function(todo){
// console.log(todo.text)
// });
 //map: will allow us to create a new array fron an array
//  const todoText =todos.map(function(todo){
//     return todo.text
//     });
//     console.log(todoText)
 //filter:will allow us to create a new arraty based on a condition 
//  const todoCompleted =todos.filter(function(todo){
//     return todo.isCompleted ===true;
//     })
//     console.log(todoCompleted)

//conditionals
//  const x = 4
//  const y = 10

//  if(x === 10){
//     console.log('x is 10')
//  }
//  else if(x >10) {
//     console.log('x is greater than  10')
//  }
//     else{
//     console.log('x is less than 10')
//  }

// if(x > 5 || y >10){
//     console.log('x is more than  10 or y is more than 10 ')
//  }


//ternary operator
// const x = 10

// const color = x > 10 ?  'red' : 'blue'//? represents than  
// // console.log(color)
// switch(color){
//     case 'red':
//     console.log('color is red')
//     break;
//     case 'blue':
//     console.log('color is blue')
//     break;
//     default:
//         console.log('color is nor red or blue')
//         break;

// }

//functions

// function addNums(num1 =1,num2 =1 ){
// return num1 + num2
// }
// // addNums(5,4) // console 9
// // addNums()// console NaN
// console.log(addNums(5,5))

//arroe function

// const addNums = (num1 =1,num2 =1 )=> {
//     return num1 + num2
//     }
//     console.log(addNums(5,5))

// const addNums = (num1 =1,num2 =1 )=> console.log(num1 + num2) 
//  addNums(5,5)

// const addNums = (num1 =1,num2 =1 )=>  num1 + num2
//   console.log(addNums(5,5))

// const addNums = num1 =>  num1 + 5 //good for one value only 
//  console.log(addNums(5))

//  todosforEach((todo) => console.log(todo)) //how  would be with forEach

//object oriented programimg 
//controctor function with prototypoes 

// function Person(firstName, lastName, dob){
//     this.firstName = firstName
//     this.lastName = lastName 
//     this.dob = new Date(dob)
//     // this.getBirthYear = function(){
//     //     return this.dob.getFullYear()
//     // }
//     // this.getFullName = function(){
//     //     return `${ this.firstName} ${this.lastName}`
//     // }
// }
// //prototype
// Person.prototype.getBirthYear= function(){
//     return this.dob.getFullYear()
// }
// Person.prototype.getFullName= function(){
//     return `${ this.firstName} ${this.lastName}`
// }

// //class- sintatc suggar
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName
//         this.lastName = lastName 
//         this.dob = new Date(dob)

//     }
//      getBirthYear(){
//         return this.dob.getFullYear() 
//      }
//      getFullName(){
//         return `${ this.firstName} ${this.lastName}`
//      }
// }
// //instntiate and object 
// const person1 = new Person ('Nanda', 'Kennedy', '9-30-1993')
// const person2 = new Person ('Borey', 'Kennedy', '9-30-1993')
// const person3 = new Person ('Athena', 'Kennedy', '9-30-1993')
// console.log(person1)
// console.log(person2.getFullName())
// // console.log(person1.getBirthYear())
// // console.log(person1.getFullName())


//dom- document object model

// console.log(window)
// single elment 
// console.log(document.getElementById('my-form'));
// const form = document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector('h1'));//do the same that getelement
// //multiple elements 
// console.log( document.querySelectorAll('.item'))// node-list :recomended to use this one 
//  console.log( document.getElementsByClassName('item')) //HTML colection: you cant use array methods you have to manyally convert it to an array  
// console.log( document.getElementsByTagName('li'))
    
//loopinng around it 
// const items = document.querySelectorAll('.item')
// items.forEach((item)=> console.log(item))

// //manipulatin the dom 
// const ul = document.querySelector('.items')
// // ul.remove()// remove all ul 
// // ul.lastElementChild.remove()//remove the last li
// ul.firstElementChild.textContent = 'hello' //changing text contant 
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'//add html

// //changing style 
// const btn = document.querySelector('.btn')
// btn.style.background ='green'


// //adding event paramenter in the btn 
// const btn = document.querySelector('.btn')

// btn.addEventListener('click',(e)=> {
//     e.preventDefault()
//     // console.log('click')
//     // console.log(e.target.className)// e:event object
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML ='<h1>hello</h1>'
// })

// // USER FORM SCRIPT

// // Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Add HTML
//     // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }