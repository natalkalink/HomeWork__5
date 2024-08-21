// Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

let number = 1

for (let tableNumber = 1; tableNumber <= 3; tableNumber++) {
	document.write(`<table border="2" style="display: inline-block; margin: 10px;">`)

	for (let row = 1; row <= 3; row++) {
		document.write(`<tr>`)

		for (let i = 1; i <= 3; i++) {
			document.write(`<td>${number++}</td>`)
		}

		document.write(`</tr>`)
	}

	document.write(`</table>`)
}