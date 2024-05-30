let tecnolgias = ['HTML','CSS', 'JavaScript', 'ReactJS']; // Array de strings

let object = {                      // Objeto literal
    nombre: 'Sergie Code',
    ocupacion: 'Desarrollador',
    materia: 'JavaScript para DOM'
};

let objectArray = [     // Array de Objetos literales

    {   materia: 'HTML', // Objeto literal
        dificultad: 6,
        necesario: true
    },

    {   materia: 'CSS', // Objeto literal
        dificultad: 8,
        necesario: true
    },

    {   materia: 'JavaScript', // Objeto literal
        dificultad: 9.5,
        necesario: false
    },
    {   materia: 'ReactJS', // Objeto literal
        dificultad: 8,
        necesario: false
    }
]

// For of

let text = '';

for (let tecnolgia of tecnolgias ) {
    text += tecnolgia + ' ,';
}

// For in

let text2 = '';

for (let x in object) {
    text2 += object[x] + ', ';
}