const startAnim = () => {
	const start = document.querySelector('.start')
	const startTitle = document.querySelector('.start_title')
	let count = 1
	let x
	// x  = setInterval(() => {
	// 	count-=0.01
	// 	start.style.background = `rgba(28, 27, 33, ${count})`;
	// 	console.log(start.style.background)
	// 	if ( count <= 0.3) {
	// 		clearInterval(x)
	// 	}
	// },100)

	setTimeout(() => {
		let text = 'K1KSs Prod.'
		let a = text.split('')
		// a.reverse()
		startTitle.textContent = ''
		for ( let i = 0; i < a.length; i++) {
			setTimeout(()=> {
				let newg = document.createElement('span')
				newg.textContent = `${a[i]}`
				startTitle.appendChild(newg)
			}, i*200)
		}

	},500)









	setTimeout(() => {
		start.style.transform= 'translateX(-100vw)';
		document.body.style.overflowY = 'scroll'
	}, 3500)
}

startAnim();