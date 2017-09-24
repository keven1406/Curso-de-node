const comandos = process.argv
const fala = comandos.find(palavra =>
	palavra === 'Oi' ? true : false)
if (fala)
	console.log('Oi, que bom te ver! Como está?')
else
	console.log('Desculpe, não entendi o que você quiz dizer!')

