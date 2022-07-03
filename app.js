let musicBar = document.querySelector('.musicBar')
let musicBarBtn = document.querySelector('.musicBarBtn')

let btn = document.querySelector('button')
let audio_dur 
let audio = document.querySelector('.music');
window.onload = () => {
	audio_dur = audio.duration;
}

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let cty = canvas.getContext('2d');
ctx.beginPath();
let x = canvas.parentNode.offsetWidth - 50
if((canvas.parentNode.offsetWidth - 50)!= x ){
	x = canvas.parentNode.offsetWidth - 50
}
canvas.setAttribute('width', `${x}px`) ;
let y = canvas.offsetWidth - 70
ctx.strokeStyle = 'lightcyan';
ctx.lineWidth = 2;
ctx.moveTo(0, 20);
ctx.lineTo(y, 20);
ctx.stroke();


let musicDraftCheck = false
let timer;
let startPlay = 0 
musicBarBtn.addEventListener('click', playMusic)

function playMusic () {
	audio.play()	
	if ( musicDraftCheck == false) {
		
		musicDraftCheck = true
		timer = setInterval(() => {
			startPlay += (y/audio_dur)/100

			draftMusic(startPlay)
			if (startPlay >= y) {
				clearInterval(timer)
				musicDraftCheck = false;
				startPlay = 20 
				ctx.strokeStyle = 'lightcyan';
				ctx.lineWidth = 2;
				ctx.moveTo(0, 20);
				ctx.lineTo(y, 20);
				ctx.stroke();
			}
			
		}, 10)

	} else if ( musicDraftCheck == true) { 
		audio.pause()
		clearInterval(timer)
		musicDraftCheck = false;
	}
}

function draftMusic(i) {
	cty.beginPath();
	cty.strokeStyle = 'cyan';
	cty.moveTo(0, 20);
	cty.lineTo(i, 20);
	cty.stroke();
	// cty.beginPath();
	// cty.moveTo(i,18);
	// cty.lineTo(i, 22);
	cty.stroke();
}

canvas.addEventListener('click' , (event) => {
	let pressOnMusicLine = event.clientX - canvas.offsetLeft 
	console.log(pressOnMusicLine, startPlay)
	if (pressOnMusicLine >= startPlay) {
		audio.currentTime+=(pressOnMusicLine - startPlay)*(audio_dur/y);
		draftMusic(pressOnMusicLine)
		startPlay = pressOnMusicLine
		console.log(startPlay, audio.currentTime, startPlay)
	} else {
		audio.currentTime-=(startPlay -pressOnMusicLine )*(audio_dur/y);
		draftMusic(0)
		ctx.strokeStyle = 'lightcyan';
		ctx.lineWidth = 2;
		ctx.moveTo(0, 20);
		ctx.lineTo(y, 20);
		ctx.stroke();
		console.log('down')
		draftMusic(pressOnMusicLine)
		startPlay = pressOnMusicLine
		console.log(startPlay, audio.currentTime,  startPlay)
	}
	
})


document.addEventListener('DOMContentLoaded', () => {

  const followCursor = () => { // объявляем функцию followCursor
    const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => { // при движении курсора

      el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    })
  }

  followCursor() // вызываем функцию followCursor

})
