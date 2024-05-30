
document.getElementById('styles').style.color = 'red'
document.getElementById('styles').style.backgroundColor = 'black'

const container = document.getElementById('div')
container.querySelector('p.style').innerHTML = 'Texto desde JavaScript'
container.querySelector('p.style').style.color = 'red'