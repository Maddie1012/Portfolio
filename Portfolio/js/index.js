let contactBtn = document.querySelector('.main-title__link');
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