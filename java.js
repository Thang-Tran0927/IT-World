const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const teamMenu  = document.querySelector('#personal_info');
    let scrollPos = window.scrollY;
    console.log("it works")
    if (scrollPos < 600) {
        homeMenu.classList.add('highlight')
        teamMenu.classList.remove('highlight');

        return
    } else if (scrollPos <1400) {
        homeMenu.classList.remove('highlight');
        teamMenu.classList.add('highlight');
        
        return
    }

    // if ((elem && scrollPos < 600) || elem) {
    //     elem.classList.remove('highlight')
    // }
};


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
