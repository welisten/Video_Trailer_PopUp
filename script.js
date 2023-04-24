const   btnWatchEl          = document.querySelector(".btn"),
        closeIconEl         = document.querySelector("i"),
        trailerContainerEl  = document.querySelector(".trailer-container"),
        videoEl             = document.querySelector("video")
        

        btnWatchEl.addEventListener("click", () => {
            trailerContainerEl.classList.remove("active")
        })

        closeIconEl.addEventListener("click", () => {
            trailerContainerEl.classList.add("active")
            videoEl.pause()
            videoEl.currentTime = 0
        })