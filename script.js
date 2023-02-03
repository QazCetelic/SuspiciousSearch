const search_object_elem = document.querySelector("#search-object");
const score_count_elem = document.querySelector('#score-count');
const timer_count_elem = document.querySelector("#timer-count");
let seconds = 0;
let minutes = 0;
let score = 0;

function randomize()
{
    const documentSizeHeightMultiplier = document.documentElement.scrollHeight / screen.height;
    // Prevent object from spawning on edge
    const borderMargin = 5;
    const x = (Math.random() * (100 - (borderMargin * 2))) + borderMargin;
    const y = Math.round(Math.random() * 100 * documentSizeHeightMultiplier);
    const angle_variation = 30;
    const angle = Math.random() * 360 % (angle_variation * 2) - angle_variation;

    const imgPath = "./img/sus" + score % 4 + ".png";
    search_object_elem.setAttribute("src", imgPath);
    search_object_elem.style.left = x + "vw";
    search_object_elem.style.top = y + "vh";
    search_object_elem.style.transform = "rotate(" + angle + "deg)";
}

function found() {
    score++;
    score_count_elem.innerText = score;

    minutes = 0;
    seconds = 0;

    randomize()
}

function update_timer() {
    timer_count_elem.innerText = minutes + ":" + String(seconds).padStart(2, '0');
}

randomize();
update_timer();

search_object_elem.addEventListener('click', () => found());

setInterval(function() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    update_timer();
}, 1000);

