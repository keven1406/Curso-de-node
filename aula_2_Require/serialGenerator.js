console.log('Criando o serial generator')
var funcao = x => {
var max = 10000
var numero =  Math.floor(Math.random() * max)

return { 'numero': numero }

}
module.exports = funcao
