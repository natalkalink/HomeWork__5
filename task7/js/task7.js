// Задача 5. Вивести таблицю


let number = 1

document.write(`<table border = "2">`)

for (let row = 1; row <= 3; row++) {
	document.write(`<tr>`)

	for (let i = 1; i <= 3; i++) {
		document.write(`<td>${number++}</td>`)
	}

	document.write(`</tr>`)
}
document.write(`</table>`)
