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
document.addEventListener('DOMContentLoaded', function() {

    const menuTabsButtons = document.querySelectorAll('.mf-menu-tabs button')
    const contentTabDiv = document.querySelectorAll('.mf-content-tab')

    menuTabsButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const currentButton = event.currentTarget
            const tabName = currentButton.getAttribute('data-tab')

            currentButton.classList.add('tab-active')
            currentButton.classList.add('mf-color-blue-900')
            menuTabsButtons.forEach(item => {
                if (item !== currentButton) {
                    item.classList.remove('tab-active')
                    item.classList.remove('mf-color-blue-900')
                }
            })

            contentTabDiv.forEach(item => {
                item.classList.remove('mf-show')
            })

            document.getElementById(tabName).classList.add('mf-show')
        })
    })

})