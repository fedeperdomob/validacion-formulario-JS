
/*
const doValidation = () => {
    const number = document.getElementById('number');


     Forma uno de hacerlo
    
    if(!number.checkValidity()) {
        document.getElementById('error').innerHTML = number.validatioMessage
    } else {
        document.getElementById('error').innerHTML = 'El número está correcto'
    }
    
    // Forma dos

    document.getElementById('error').innerHTML = number.checkValidity() ? 'el número está correcto' : number.validatioMessage

}
*/

const doValidation = () => {
    const name = document.getElementById('name');
    document.getElementById('error').innerHTML = name.checkValidity()
        ? 'El Nombre está correcto'
        : 'El nombre es requerido, debe completar este campo'
}