const mobileBtn = document.getElementById('open-nav-btn'),
    nav = document.querySelector('nav'),
    mobileBtnClose = document.getElementById('close-nav-btn');

var mobileThreshold = window.matchMedia("(max-width: 768px)");

function setNavDisplay(threshold) {
    if (threshold.matches) {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}

setNavDisplay(mobileThreshold);

mobileBtn.addEventListener('click', () => {
    nav.style.display = 'flex';
});

mobileBtnClose.addEventListener('click', () => {
    nav.style.display = 'none';
})

mobileThreshold.addEventListener("change", setNavDisplay)