console.log('A ' + new Date())
setTimeout(function () {
	console.log('I ' + new Date())
}, 0)
console.log('B ' + new Date())
//Deixa para executar o setTimeout depois mesmo ele estando antes. Isso ocorre por que ele deixa pra executar o setTimeout no proximo loop do event loop e apenas executa o console A e B registra o setTimeout() na primeira volta 
