const processo = process.argv
const lista = []
if (processo === 'café')
	lista.push(processo)
console.log('Você digitou ' + processo.slice(2))
