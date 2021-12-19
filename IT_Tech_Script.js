

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const teamMenu  = document.querySelector('#personal_info');
    teamMenu.classList.add('highlight');
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);