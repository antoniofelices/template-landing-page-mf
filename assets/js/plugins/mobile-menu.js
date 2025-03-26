document.addEventListener('DOMContentLoaded', function() {

    const body = document.body;
    const containerNavHeader = document.getElementById('container-nav-header');
    // const iconClose = document.getElementById('icon-close');
    // const iconOpen = document.getElementById('icon-open');
    const mobileDropdownToggleButton = document.getElementById('mobile-dropdown-toggle');
    
    console.log(mobileDropdownToggleButton)

    if(!containerNavHeader) return;

    function toggleMobileMenu() {
        body.classList.toggle('h-dvh');
        body.classList.toggle('mf-overflow-y-hide');
        containerNavHeader.classList.toggle('mf-sm-hide');
        // iconClose.classList.toggle('mf-sm-hide');
        // iconOpen.classList.toggle('mf-sm-hide');
    }

    function closeMobileMenu() {
        body.classList.remove('h-dvh');
        body.classList.remove('mf-overflow-y-hide');
        containerNavHeader.classList.add('mf-sm-hide');
        // iconClose.classList.add('mf-sm-hide');
        // iconOpen.classList.remove('mf-sm-hide');
    }

    // function handleOutsideClick(event) {
    //     const target = event.target;
    //     if (!target.closest('#container-nav-header') && !target.closest('.mobile-dropdown-toggle')) {
    //         if (!containerNavHeader.classList.contains('mf-sm-hide')) {
    //             closeMobileMenu();
    //         }
    //     }
    // }

    mobileDropdownToggleButton.addEventListener('click', toggleMobileMenu);
    // document.addEventListener('click', handleOutsideClick);
});