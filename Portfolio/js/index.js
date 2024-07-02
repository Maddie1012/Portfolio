let contactBtn = document.querySelector('.intro__contact-link');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.modal-button')

function OpenModalWin() {
    modal.style.display = 'block'
}

function CloseModalWin() {
    modal.style.display = 'none'
}

contactBtn.addEventListener('click', OpenModalWin)
closeBtn.addEventListener('click', CloseModalWin)