// Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). 
// Кількість випадкових чисел вводиться користувачем.

let userNum = parseInt(prompt('Введiть кiлькiсть випадкових чисел', ''))

document.write(`<ul>`);
for (let i = 0; i < userNum; i++) {
	let randomNum = Math.floor(Math.random() * 100) + 1
	document.write(`<li>${randomNum}</li>`)
}
document.write(`</ul>`)



// let userNum = parseInt(prompt('Введiть кiлькiсть випадкових чисел', ''))

// if (!isNaN(userNum) && userNum > 0) {
// 	document.write(`<ul>`);
// 	for (let i = 0; i < userNum; i++) {
// 		let randomNum = Math.floor(Math.random() * 100) + 1;
// 		document.write(`<li>${randomNum}</li>`);
// 	}
// 	document.write(`</ul>`);
// } else {
// 	alert('Введiть коректне число!')
// }