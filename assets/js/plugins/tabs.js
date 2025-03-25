document.addEventListener('DOMContentLoaded', function() {

    const menuTabsButtons = document.querySelectorAll('.mf-menu-tabs button')
    const contentTabDiv = document.querySelectorAll('.mf-content-tab')

    menuTabsButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const currentButton = event.currentTarget
            const tabName = currentButton.getAttribute('data-tab')

            currentButton.classList.add('mf-border-block-end-active-red')
            currentButton.classList.add('mf-color-blue-900')
            menuTabsButtons.forEach(item => {
                if (item !== currentButton) {
                    item.classList.remove('mf-border-block-end-active-red')
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