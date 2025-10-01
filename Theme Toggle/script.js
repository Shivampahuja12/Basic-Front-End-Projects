const btn = document.querySelector('.toggle')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode')

    if (body.classList.contains('dark-mode')){
        btn.textContent = 'Light Mode'
    }
    else {
        btn.textContent = 'Dark Mode'
    }
})