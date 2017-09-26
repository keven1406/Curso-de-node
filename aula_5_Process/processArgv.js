const help = require('./help')
const options = process.argv.slice(2)
if (options.length < 1) {
	help.showOptions()
}
switch(options[0]) {
	case 'a':
		console.log('pid: ' + process.pid)
		break
	case 'b':
		console.log('title: ' + process.title)
		break
	case 'c':
		console.log('arch: ' + process.arch)
		break
	case 'd':
		console.log('plataform: ' + process.platform)
		break
	default:
		help.showOptions()
}
