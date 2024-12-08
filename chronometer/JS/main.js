const stopWatch = document.getElementById('stopwatch')
const playPauseButton = document.getElementById('play-pause')
const secondsSphere = document.getElementById('seconds-sphere')


let stopWatchInterval
let runningTime = 0


const playPause = () => {
    const isPause = !playPauseButton.classList.contains('running')
    if (isPause){
        playPauseButton.classList.add('running')
        start()
    } else{
        playPauseButton.classList.remove('running')
        pause()
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused'
    clearInterval(stopWatchInterval)
}


const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)'
    secondsSphere.style.animation = 'none'
    playPauseButton.classList.remove('running')
    runningTime = 0
    clearInterval(stopWatchInterval)
    stopWatch.textContent = '00:00'
}

const start = () => {
    secondsSphere.style.animation = 'rotation 60s linear infinite'
    let startTime = Date.now() - runningTime
    secondsSphere.style.animationPlayState = 'running'
    stopWatchInterval = setInterval(() => {
        runningTime = Date.now() - startTime
        stopWatch.textContent = calculateTime(runningTime)
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000)
    const total_minutes = Math.floor(total_seconds / 60)


    const display_seconds = (total_seconds % 60).toString().padStart(2, "0")
    const display_minutes = total_minutes.toString().padStart(2, "0")

    return `${display_minutes}:${display_seconds}`
}