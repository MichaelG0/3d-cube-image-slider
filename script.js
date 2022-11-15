let playBtn = document.querySelector('#play-btn')
let cubes = document.querySelectorAll('.cube')
let bigCube = document.querySelector('.big-cube')
let arrL = document.querySelector('.arr-wrp-l')
let arrR = document.querySelector('.arr-wrp-r')
let running = true


function animationToggler() {
    if (!running) {
        for (const cube of cubes) {
            cube.style.animationPlayState = 'paused'
        }
        interval = clearInterval(interval)
    }
    console.log('bu');
}

let interval = setInterval(animationToggler, 3999)

playBtn.addEventListener('click', () => {
    running = !running;
    if (running) {
        playBtn.classList.remove('fa-circle-play')
        playBtn.classList.add('fa-circle-pause')
        for (const cube of cubes) {
            cube.style.animationPlayState = 'running'
        }
        if (!interval){
            console.log('BUUUUUUU');
            interval = setInterval(animationToggler, 3999)
        }
    } else {
        playBtn.classList.remove('fa-circle-pause')
        playBtn.classList.add('fa-circle-play')
    }
})



let a = 0
let wait = false
arrL.addEventListener('click', () => {
    if (wait) return
    wait = true
    a++
    bigCube.style.transform = `rotateY(${a * 90}deg)`
    setTimeout(() => wait = false, 400);
})
arrR.addEventListener('click', () => {
    if (wait) return
    wait = true
    a--
    bigCube.style.transform = `rotateY(${a * 90}deg)`
    setTimeout(() => wait = false, 400);
})
