const onOff = document.querySelector('input[value="On/Off"')
const bpm = document.querySelector('select')
const metronome = document.querySelector('.click')
let timer;

async function playClick(bpm=1000) {
    const clickAudio = await new Audio('/audio/PUCK1.wav') 
    clickAudio.play()
    timer = setInterval(() => {
        clickAudio.play()
    },bpm)
}

playClick()

onOff.addEventListener('click', () => {
    const convertToMS = +(60000/bpm.value).toFixed(2)
    metronome.classList.toggle('animation')
    metronome.classList.contains('animation') ?
        playClick(convertToMS) : clearInterval(timer)
} )

bpm.addEventListener('change', () => {
    let status = metronome.classList.contains('animation');
    const convertToMS = +(60000/bpm.value).toFixed(2)
    metronome.style.animationDuration = `${convertToMS}ms`
    if (!status)  return
    clearInterval(timer)
    playClick(convertToMS)
})