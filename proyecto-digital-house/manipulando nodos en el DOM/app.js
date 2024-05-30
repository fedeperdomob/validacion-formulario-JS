// Creando un nodo de párrafo
const paragraph = document.createElement('p');
// Aca creamos un elemento de texto
const node = document.createTextNode('Este es contenido nuevo');
// Incorporamos el elemento de texto al nodo de párrafo
paragraph.appendChild(node);

// En la variable container tenemos el DIV
const container = document.getElementById('div1');
const p1 = document.getElementById('p1');
container.insertBefore(paragraph, p1);

const p2 = document.getElementById('p2');
p2.remove();
container.removeChild(p1);

const p3 = document.getElementById('p3');
container.replaceChild(paragraph, p3);