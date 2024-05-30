const paragraph1 = document.getElementById('paragraph1')
const paragraph2 = document.getElementById('paragraph2')


let text = paragraph1.getAttribute('class') ? paragraph1.getAttribute('class') : paragraph2.getAttribute('class')
document.getElementById('atribute').innerHTML = text 

const input = document.getElementById('input')
input.setAttribute('value', 'Pedro Pascal')
