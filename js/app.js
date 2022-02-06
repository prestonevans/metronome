const onOff = document.querySelector('input[value="On/Off"')
const bpm = document.querySelector('select')
const metronome = document.querySelector('.click')

onOff.addEventListener('click', () => {
    metronome.classList.toggle('animation')
} )

bpm.addEventListener('change', () => {
    const convertToMS = (60000/bpm.value).toFixed(2)
    metronome.style.animationDuration = `${convertToMS}ms`
})