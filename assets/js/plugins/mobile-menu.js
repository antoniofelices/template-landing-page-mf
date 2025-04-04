const mobileMenu = () => {
    const body = document.body
    const containerNavHeader = document.getElementById('container-nav-header')
    const mobileDropdownToggleButton = document.getElementById(
        'mobile-dropdown-toggle'
    )

    if (!containerNavHeader) return

    function toggleMobileMenu() {
        body.classList.toggle('h-dvh')
        body.classList.toggle('mf-overflow-y-hide')
        containerNavHeader.classList.toggle('mf-sm-hide')
    }

    // function handleOutsideClick(event) {
    //     const target = event.target
    //     if (!target.closest('#container-nav-header') && !target.closest('.mobile-dropdown-toggle')) {
    //         if (!containerNavHeader.classList.contains('mf-sm-hide')) {
    //             closeMobileMenu()
    //         }
    //     }
    // }

    mobileDropdownToggleButton.addEventListener('click', toggleMobileMenu)
    // document.addEventListener('click', handleOutsideClick);
}

export default mobileMenu
