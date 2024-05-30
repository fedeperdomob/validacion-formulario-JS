const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const job = document.getElementById('job')

document.getElementById('welcome').innerHTML = sessionStorage.getItem('userName') == null ? '' : 'Bienvenido ' + sessionStorage.getItem('userName') 

const save = () => {
    sessionStorage.setItem('userName', firstname.value + ' ' + lastname.value)
    sessionStorage.setItem('job', job.value)
    document.getElementById('welcome').innerHTML = sessionStorage.getItem('userName') == null ? '' : 'Bienvenido ' + sessionStorage.getItem('userName') 

}