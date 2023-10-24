const pwel = document.getElementById('pw')
const copyel = document.getElementById('copy')
const lenel = document.getElementById('len')
const upperel = document.getElementById('upper')
const lowerel = document.getElementById('lower')
const numberel = document.getElementById('number')
const symbolel = document.getElementById('symbol')
const generateel = document.getElementById('generate')

const upperLetters = 'QWERTYUIOPSDFGHJKLXCVBNM'
const lowerLetters = 'qwertyuiopasdfghjklzxcvbnm'
const numbers = '1234567890'
const symbols = '!@#$%^&*()_+=-'
let password

function getLowercase() {
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
function getUppercase() {
	return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
function getNumber() {
	return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbol() {
	return symbols[Math.floor(Math.random() * symbols.length)]
}
function generatePassword() {
	const len = lenel.value
	for (let i = 0; i < len; i++) {
		const x = generateX()
		password += x

	}

	pwel.textContent = password
}
function generateX() {
	const xs = []
	if (upperel.checked) {
		xs.push(getUppercase())
	}
	if (lowerel.checked) {
		xs.push(getLowercase())
	}
	if (numberel.checked) {
		xs.push(getNumber())
	}
	if (symbols.checked) {
		xs.push(getSymbol())
	}
	return xs[Math.floor(Math.random() * xs.length)]
}
generateel.addEventListener('click', generatePassword)