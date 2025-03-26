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