// Задача 4. Вивести таблицю з 3 рядків і 7 стовпців

document.write(`<table border = "2">`)

for (let row = 1; row <= 3; row++) {
	document.write(`<tr>`)
	for (let i = 1; i <= 7; i++) {
		document.write(`<td>${i}</td>`)
	}
	document.write(`</tr>`)
}
document.write(`</table>`)
