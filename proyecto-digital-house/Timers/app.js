
const action = () => {
    setTimeout(() => {
       console.log('Esta acción es la del botón')
    }, 5000);
}

const action2 = () => {
    setInterval(() => {
        console.log('Esta acción es la del botón')
    }, 2000);
}

