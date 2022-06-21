const button = document.querySelector
('button');
const html = document.querySelector
('html');

// ketika tombol di klik
button.addEventListener('click', 
function () {
    // cek color mode sat ni , lalu ubah
    if (html.dataset.colorMode === 'light'){
        html.dataset.colorMode = 'dark';
        this.textContent = 'Light Mode';
    } else {
        html.dataset.colorMode = 'light';
        this.textContent = 'Dark Mode';
    }
});

const color = document.querySelector
('#color');

// control
const padding = document.querySelector
('#padding');

padding.addEventListener('mousemove',
function() {
    document.documentElement.style.
    setProperty('--box-padding', this.
    value + 'px');
});

color.addEventListener('change',
function() {
    document.documentElement.style.
    setProperty('--box-color', this.
    value);
});