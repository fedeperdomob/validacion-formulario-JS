
document.getElementById('test').innerHTML = 'Hola Mundo desde JavaScript'; // esto selecciona un solo y por eso es modificable

document.getElementsByClassName('test').innerHTML = 'Hola!'; // esto selecciona varios

document.getElementById('test').style.color = 'red';  // manupulacion de estilos CSS

document.getElementById('test').setAttribute('class', 'colorado'); // 

//////////

let salutations = document.querySelectorAll('p.saludo');

document.getElementById('test').innerHTML = 'En este parrafo vamos a estar escribiendo el primero de los saludos, el cual es: '
 + salutations[0].innerHTML;

/////////

let form = document.forms['forms1'];
let text = '';

for (let i = 0; i < form.length; i++) {
    text += form.elements[i].value + '<br>';
    
}

document.getElementById('test').innerHTML = text;

///////// Evento funcion Declarativa

function changeThisElement(element){
    element.innerHTML = 'Hola munndo desde funcion'
}

/// Evento funcion arrow

let changeThisElement = element => element.innerHTML = 'Hola mundo'