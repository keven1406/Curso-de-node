process.stdin.on('readable', x => {
	const chunk = process.stdin.read()
	if (chunk)
		console.log(chunk.toString())
})
