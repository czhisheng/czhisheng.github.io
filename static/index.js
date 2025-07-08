let mode = '';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#mode').innerHTML = '<i class="bi bi-brightness-high"></i>';
    mode = 'light'
})

function switch_mode(element) {
    const body = document.body;
    if (mode === 'dark') {
        element.innerHTML = '<i class="bi bi-brightness-high"></i>';
        body.setAttribute('data-bs-theme', 'light')
        mode = 'light';
    }
    else {
        element.innerHTML = '<i class="bi bi-moon"></i>';
        body.setAttribute('data-bs-theme', 'dark')
        mode = 'dark';
    }
}