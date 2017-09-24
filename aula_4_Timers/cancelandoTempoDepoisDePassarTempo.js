const a = setTimeout(x =>
	console.log('A' + new Date()),3000)
const b = setTimeout(x =>
	clearTimeout(a), 1000)
