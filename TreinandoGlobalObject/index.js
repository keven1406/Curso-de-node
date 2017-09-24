const script = require('./script')
const corpo = x => { 
	console.log(script.plantas)
	script.plantas.push('Caju Roxo')
	console.log(script.plantas)
}
console.log(script.plantas)
module.exports = corpo
global.elias = 'elias'
console.log(global)
