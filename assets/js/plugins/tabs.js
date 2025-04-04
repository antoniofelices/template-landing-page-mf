const tabs = () => {
    const menuTabsButtons = document.querySelectorAll('.menu-tabs button')
    const contentTabDiv = document.querySelectorAll('.content-tab')

    menuTabsButtons.forEach((button) => {
        button.addEventListener('click', function (event) {
            const currentButton = event.currentTarget
            const tabName = currentButton.getAttribute('data-tab')

            currentButton.classList.add('tab-active')
            menuTabsButtons.forEach((item) => {
                if (item !== currentButton) {
                    item.classList.remove('tab-active')
                }
            })

            contentTabDiv.forEach((item) => {
                item.classList.remove('show')
            })

            document.getElementById(tabName).classList.add('show')
        })
    })
}

export default tabs
