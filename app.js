let musicBar = document.querySelector('.musicBar')
let musicBarBtn = document.querySelector('.musicBarBtn')

let progress = document.querySelector('.progress')
let progressBar = document.querySelector('.progress_bar')
let audio_dur 
let audio = document.querySelector('.music');


let y = progress.offsetWidth;


let musicDraftCheck = false
let timer;
let startPlay = 0 
musicBarBtn.addEventListener('click', playMusic)

function playMusic () {
	audio_dur = audio.duration;
	audio.play()	
	if ( musicDraftCheck == false) {
		musicDraftCheck = true
		timer = setInterval(() => {
			startPlay += ((y/audio_dur)/y*100)/10
			if (startPlay/100*y >= y) {
				clearInterval(timer)
				musicDraftCheck = false;
				startPlay = 0 
				console.log(audio.currentTime)
				audio.load()
			}
			draftMusic(startPlay)
		}, 100)

	} else if ( musicDraftCheck == true) { 
		audio.pause()
		clearInterval(timer)
		musicDraftCheck = false;
	}
}

function draftMusic(i) {
	progressBar.style.width = `${i}%`
}

progress.addEventListener('click' , (event) => {
	audio_dur = audio.duration;
	let pressOnMusicLine = (event.clientX - progress.offsetLeft)/y*100 
	console.log(event.clientX, pressOnMusicLine, startPlay,audio.currentTime)
	if (pressOnMusicLine >= startPlay) {
		audio.currentTime+= (pressOnMusicLine - startPlay)*(audio_dur/y)*10;
		draftMusic(pressOnMusicLine)
		startPlay = pressOnMusicLine
		console.log(startPlay, audio.currentTime, startPlay)
	} else {
		audio.currentTime-=(startPlay -pressOnMusicLine )*(audio_dur/y)*10;
		draftMusic(0)
		draftMusic(pressOnMusicLine)
		startPlay = pressOnMusicLine
		console.log(startPlay, audio.currentTime,  startPlay)
	}
	// audio.play()	
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
