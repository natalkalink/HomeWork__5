// Задача 3. Поступово генерувати 100 випадкових чисел від 1 до 1000. 
// Підрахувати яких чисел більше: парних чи непарних.

let evenNumber = 0
let oddNamber = 0

for (let i = 1; i <= 100; i++) {
	let randomNum = 1 + Math.floor(Math.random() * 1000)
	if (randomNum % 2 === 0) {
		evenNumber++
	} else {
		oddNamber++
	}
}

if (evenNumber > oddNamber) {
	document.write(`Парних чисел більше! Парних ${evenNumber},непарних ${oddNamber}`)
} else if (oddNamber > evenNumber) {
	document.write(`Непарних чисел більше! Непарних ${oddNamber},парних ${evenNumber}`)
} else {
	document.write(`Парних ${evenNumber} та непарних ${oddNamber} чисел порівну`)
}
