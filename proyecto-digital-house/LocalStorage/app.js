

const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const job = document.getElementById('job')

document.getElementById('welcome').innerHTML = localStorage.getItem('userName') == null ? '' : 'Bienvenido ' + localStorage.getItem('userName') 

const save = () => {
    localStorage.setItem('userName', firstname.value + ' ' + lastname.value)
    localStorage.setItem('job', job.value)
}