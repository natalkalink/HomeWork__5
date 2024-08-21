// Задача 7. Вивести на екран N абзаців (N вводиться користувачем) за зразком: 

let paragraphNumber = parseInt(prompt('Введiть кiлькiсть абзаців', ''))
let subtitleNumber = 1

for (let h = 1; h <= paragraphNumber; h++) {
	document.write(`<h1>Заголовок ${h}</h1>`)

	for (let p = 1; p <= h; p++) {
		document.write(`<p>Роздiл ${subtitleNumber},параграф ${p}</p>`)
	}
	subtitleNumber++
	document.write(`<hr>`)
}
