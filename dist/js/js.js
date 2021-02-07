const darkMode = document.querySelector('#dark-mode')
darkMode.addEventListener('change', (e) => {
    const $this = e.currentTarget;

    const label = darkMode.previousElementSibling
    const toggle = $this.checked
    label.classList.toggle('header__theme-label--active')

    if (toggle)
        document.documentElement.dataset.theme = 'dark'
    else
        document.documentElement.dataset.theme = ''
})