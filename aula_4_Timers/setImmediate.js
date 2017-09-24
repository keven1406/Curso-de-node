console.log('A ' + new Date())
setImmediate(function () {
	console.log('I ' + new Date())
})//Não é necessario passar o tempo para função por que essa função foi feita para executar esse bloco de código no proximo loop. Ou seja, é mais específica.
console.log('B ' + new Date())
