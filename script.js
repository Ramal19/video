
const con = document.querySelector(".con")
const btn = document.getElementById("btn");
const video = document.querySelector("video");
const genis = document.getElementById("genis");
let videoCon = document.querySelector(".video-con");
let videoRange = document.getElementById("video-time");
const videoTimeCon = document.querySelector(".video-time-con");
const videoPanel = document.querySelector(".video-panel");
const videoBack = document.getElementById("time-back");
const videoFor = document.getElementById("time-forward");
const videoSpeed = document.getElementById("video-speed");
let speedCon = null;
const fullScreen = document.getElementById("full-screen");
const logo = document.getElementById("logo");
const slider = document.querySelector(".slider");
const volume = document.getElementById("volume");
let header = document.querySelector("header")
let sideBar = document.querySelector(".side-bar");
console.log(video.controls);

let timer;

volume.addEventListener("click", () => {
    slider.classList.add("show");

    timer = setTimeout(() => {
        slider.classList.remove("show")
    }, 2000);
})

logo.addEventListener("click", () => {

    window.location.replace("../index.html")
})

fullScreen.addEventListener("click", () => {
    const width = parseFloat(getComputedStyle(videoCon).width);
    const sideBarwidthFull = parseFloat(getComputedStyle(sideBar).width);


    if (width !== window.innerWidth) {

        let totalWidthFull = width + sideBarwidthFull;

        videoCon.style.cssText = `width: ${totalWidthFull + 'px'}; height: 100vh;`
        videoTimeCon.style.width = "100%"
        videoPanel.style.width = "100%"
        fullScreen.innerHTML = `<i class="bi bi-arrows-angle-contract"></i>`
        document.body.style.overflow = "hidden"
        genis.style.display = "none"
        header.style.display = "none"
        sideBar.style.display = "none"

        if (continueBtn) {
            continueBtn.style.cssText = `
                width: 100px;
                              height: 100px;
                              position: absolute;
                              top: calc(-100vh / 2);
                              left: calc(100% /2);
                              font-size: 48px;
                              background-color: #00000078;
                              border-radius: 9999px;
                              text-align: center;
                              cursor: pointer;
            `
        }

    } else {
        videoCon.style.cssText = `width: 1280px; height: 720px;`
        videoTimeCon.style.width = "1280px"
        videoPanel.style.width = "1280px"
        fullScreen.innerHTML = `<i class="bi bi-arrows-angle-expand"></i>`
        document.body.style.overflowY = "scroll"
        genis.style.display = "block"
        header.style.display = "flex"
        sideBar.style.display = "flex"

        if (continueBtn) {
            continueBtn.style.cssText = `width: 100px;
                    height: 100px;
                    position: absolute;
                    top: calc(-720px / 2);
                    left: calc(1280px /2);
                    font-size: 48px;
                    background-color: #00000078;
                    border-radius: 9999px;
                    text-align: center;
                    cursor: pointer;` // lazımdırsa sıfırlaya bilərsən
        }
    }
});


videoSpeed.addEventListener("click", () => {

    if (speedCon === null) {
        speedCon = document.createElement("div");
        speedCon.innerHTML = `
                   <span>0.5x</span>
                   <span>0.75x</span>
                   <span>1x</span>
                   <span>1.25x</span>
                   <span>1.5x</span>
                   <span>1.75x</span>
                   <span>2x</span>
                `

        speedCon.id = "speedTimer";

        con.appendChild(speedCon);
        let videoConWidth = parseInt(getComputedStyle(videoCon).width)
        let speedTimerCon = document.getElementById("speedTimer");
        speedTimerCon.style.cssText = `
                   width: 100px;
                   height: 300px;
                   display: flex;
                   flex-direction: column;
                   gap: 10px;
                   background-color: #000;
                   border: 1px solid #fff;
                   border-radius: 7px;
                   color: #fff;
                   position: absolute;
                   top: ${(videoConWidth - 920) + 'px'};
                   left: 60px;
                   `
        // transform: translateY(365px) translateX(-1220px);
        let speedTimer = document.querySelectorAll("#speedTimer > span");

        speedTimer.forEach((el, index) => {

            if (index === 0) {

                el.addEventListener("click", () => {

                    video.playbackRate = 0.5;
                    videoSpeed.textContent = el.textContent;
                    con.removeChild(speedCon);
                    speedCon = null;

                })
            } else if (index === 1) {

                el.addEventListener("click", () => {

                    video.playbackRate = 0.75;
                    videoSpeed.textContent = el.textContent;
                    con.removeChild(speedCon);
                    speedCon = null;

                })
            } else if (index === 2) {

                el.addEventListener("click", () => {

                    video.playbackRate = 1;
                    videoSpeed.textContent = el.textContent;
                    con.removeChild(speedCon);
                    speedCon = null;
                })
            } else if (index === 3) {

                el.addEventListener("click", () => {

                    video.playbackRate = 1.25;
                    videoSpeed.textContent = el.textContent;
                    con.removeChild(speedCon);
                    speedCon = null;

                })
            } else if (index === 4) {

                el.addEventListener("click", () => {

                    video.playbackRate = 1.5;
                    videoSpeed.textContent = el.textContent;
                    con.removeChild(speedCon);
                    speedCon = null;
                })
            } else if (index === 5) {

                el.addEventListener("click", () => {

                    video.playbackRate = 1.75;
                    videoSpeed.textContent = el.textContent;
                    con.removeChild(speedCon);
                    speedCon = null;
                })
            } else {

                el.addEventListener("click", () => {

                    video.playbackRate = 2;
                    videoSpeed.textContent = el.textContent;
                    con.removeChild(speedCon);
                    speedCon = null;
                })
            }
        })


    } else {

        con.removeChild(speedCon);
        speedCon = null;
    }

})

videoBack.addEventListener("click", () => {

    video.currentTime -= 5;
})

videoFor.addEventListener("click", () => {

    video.currentTime += 5;
})

video.addEventListener("timeupdate", () => {
    let percent = (video.currentTime / video.duration) * 100;
    videoRange.style.width = percent + "%";

    if (video.currentTime === video.duration) {

        btn.innerHTML = `<i class="bi bi-play-fill"></i>`
    }
})


videoTimeCon.addEventListener("click", (e) => {
    let rect = videoTimeCon.getBoundingClientRect();
    let clickX = e.clientX - rect.left;
    let percent = clickX / rect.width;
    video.currentTime = percent * video.duration;
});

btn.addEventListener("click", () => {
    if (video.paused) {
        video.play()
        btn.innerHTML = `<i class="bi bi-pause"></i>`
    } else {
        video.pause()
        btn.innerHTML = `<i class="bi bi-play-fill"></i>`
    }
})

let continueBtn = null

if (video.paused) {
    continueBtn = document.createElement("button");
    videoPanel.appendChild(continueBtn);
    continueBtn.id = "continueBtn"

    continueBtn.innerHTML = `<i class="bi bi-play-fill"></i>`;
    continueBtn.style.cssText =
        `
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    top: calc(-720px / 2);
                    left: calc(1280px /2);
                    font-size: 48px;
                    background-color: #00000078;
                    border-radius: 9999px;
                    text-align: center;
                    cursor: pointer;
                `
    console.log("salam");

    if (videoCon.style.width === "100%") {
        console.log("salam");

    }

    continueBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            continueBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;

        } else {
            video.pause();
            continueBtn.innerHTML = `<i class="bi bi-play-fill"></i>`;
        }
    })
}

videoCon.addEventListener("click", () => {

    if (video.paused) {
        video.play()
        btn.innerHTML = `<i class="bi bi-pause"></i>`


    } else {
        video.pause()
        btn.innerHTML = `<i class="bi bi-play-fill"></i>`
    }
})

video.addEventListener("play", () => {

    btn.innerHTML = `<i class="bi bi-pause"></i>`;
    continueBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
})

video.addEventListener("pause", () => {
    btn.innerHTML = `<i class="bi bi-play-fill"></i`
    continueBtn.innerHTML = `<i class="bi bi-play-fill"></i>`;
})

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {
        if (video.paused) {
            video.play()
            btn.innerHTML = `<i class="bi bi-pause"></i>`
            continueBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
        } else {
            video.pause()
            btn.innerHTML = `<i class="bi bi-play-fill"></i>`
            continueBtn.innerHTML = `<i class="bi bi-play-fill"></i>`;
        }
    }
})

genis.addEventListener("click", () => {
    console.log("button calisir");
    const width = parseInt(getComputedStyle(videoCon).width);
    const sideBarwidth = parseInt(getComputedStyle(sideBar).width);
    if (width === 1280) {
        genis.innerHTML = `<i class="bi bi-arrows-collapse-vertical"></i>`;
        let totalWidth = width + sideBarwidth;
        videoTimeCon.style.width = totalWidth + 'px';
        videoPanel.style.width = totalWidth + 'px';
        videoCon.style.width = totalWidth + 'px';
        sideBar.style.display = "none";

        continueBtn.style.cssText =
            `
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 9999px;
        font-size: 48px;
        position: absolute;
        top: calc(-720px / 2);
        left: calc(100% / 2);
        background-color: #00000078;
        `

        console.log(speedTimerCon);

    } else {
        videoCon.style.width = "1280px";
        genis.innerHTML = `<i class="bi bi-arrows"></i>`
        videoTimeCon.style.width = "1280px"
        videoPanel.style.width = "1280px"
        sideBar.style.display = "flex"

    }
});


const level = document.querySelector(".level");

level.value = 100;

level.addEventListener("input", () => {
    console.log(parseFloat(level.value) / 100, "video ses", video.volume);

    video.volume = parseFloat(level.value) / 100;
})

level.addEventListener("mouseover", () => {
    clearTimeout(timer)
})

level.addEventListener("mouseout", () => {

    timer = setTimeout(() => {
        slider.classList.remove("show")
    }, 2000);
})