// const changerBtn = document.querySelector('#theme-changer')

// function changeMode(mode) {
	// if (mode === 'light') {
		// document.querySelector('body').classList.remove('dark')
	// } else if (mode === 'dark') {
		// document.querySelector('body').classList.add('dark')
	// }
// }

// changeMode(localStorage.getItem('theme') || 'light')

// changerBtn.addEventListener('click', e => {
	// if (localStorage.getItem('theme') === 'light') {
		// changeMode('dark')
		// localStorage.setItem('theme', 'dark')
	// } else {
		// changeMode('light')
		// localStorage.setItem('theme', 'light')
	// }
// })
const changerBtn = document.querySelector('#theme-changer')
changerBtn.addEventListener('click', (e) => {

    document.querySelector('body').classList.toggle('dark')
    document.querySelector('#theme-changer i').classList.toggle('bx-sun')
})