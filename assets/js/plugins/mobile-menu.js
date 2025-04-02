const mobileMenu = () => {

    const body = document.body
    const header = document.getElementById('header')
    const logo = document.getElementById('logo-bookmark')
    const containerNavHeader = document.getElementById('container-nav-header')
    const mobileDropdownToggleButton = document.getElementById('mobile-dropdown-toggle')
    const openPathIcon = document.querySelector('#mobile-dropdown-toggle .open')
    const closePathIcon = document.querySelector('#mobile-dropdown-toggle .close')
    
    if(!containerNavHeader) return;

    function toggleMobileMenu() {
        body.classList.toggle('overflow-y-hidden')
        logo.classList.toggle('brightness-1000')
        header.classList.toggle('menu-active')

        containerNavHeader.classList.toggle('hidden')
        openPathIcon.classList.toggle('hidden')
        closePathIcon.classList.toggle('hidden')
    }

    // function closeMobileMenu() {
    //     body.classList.remove('h-dvh')
    //     body.classList.remove('mf-overflow-y-hide')
    //     containerNavHeader.classList.add('mf-sm-hide')
    //     iconClose.classList.add('mf-sm-hide')
    //     iconOpen.classList.remove('mf-sm-hide')
    // }

    // function handleOutsideClick(event) {
    //     const target = event.target
    //     if (!target.closest('#container-nav-header') && !target.closest('.mobile-dropdown-toggle')) {
    //         if (!containerNavHeader.classList.contains('mf-sm-hide')) {
    //             closeMobileMenu()
    //         }
    //     }
    // }

    mobileDropdownToggleButton.addEventListener('click', toggleMobileMenu);
    // document.addEventListener('click', handleOutsideClick)

}

export default mobileMenu