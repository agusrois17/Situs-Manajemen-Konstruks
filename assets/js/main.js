document.addEventListener("DOMContentLoaded", function () {
    let docCount = 150;
    let projectProgress = 75;

    let docElement = document.getElementById("docCount");
    let progressElement = document.getElementById("projectProgress");

    let docStart = 0;
    let progressStart = 0;

    function animateCount(element, start, end, duration) {
        let range = end - start;
        let stepTime = Math.abs(Math.floor(duration / range));
        let step = start;
        let timer = setInterval(() => {
            step++;
            element.textContent = step;
            if (step >= end) clearInterval(timer);
        }, stepTime);
    }

    animateCount(docElement, docStart, docCount, 2000);
    animateCount(progressElement, progressStart, projectProgress, 2000);
});
