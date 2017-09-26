const konsole = {
	log: msg =>
		process.stdout.write(msg + '\n'),
	error: msg =>
		process.stderr.write(msg + '\n')
}
konsole.log('A TTY: ' + !!process.stdout.isTTY) //Verificar se é um teclado ou um programa que está inserindo informaçõe
konsole.error('B TTY: ' + !!process.stderr.isTTY)
