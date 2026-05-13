const colori = ['rosso', 'verde', 'giallo', 'blu', 'nero'];

// for of legge tutti gli elementi, seza salti, e non è reversibile.
for (const colore of colori) {
    console.log(colore);
}

const persona = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 25,
    ospite: true,
    dataArrivo: '20/07/2026',
    dataPartenza: '30/07/2026',
    stanza: 357,
};

//for in legge le chiavi di un array
for (const key in persona) {
    console.log(`${key}: ${persona[key]}`);
}

console.log('**********************************');
// while - do/while
let x = 11;
console.log('WHILE') //in casi come questo (condizione falsa in partenza), while non stampa nulla
while (x <= 10) {
    console.log(x);
    x++;
}

console.log('DO/WHILE') //in casi come queso, do/while stampa comunque il primo caso prima di fermarsi
let y = 11;
do {
    console.log(y);
    y++;
}
while (y <= 10);

//Condizione di blocco non numerica
const names = ['Mario', 'Piero', 'Dario', 'Federico', 'Elena', 'Pino'];
let stop = false;
let i = 0;
while (stop === false) {
    console.log(names[i]);
    if (names[i] === 'Elena') {
        stop = true;
    }
    i++;
}


let alt = 'Elena';
let z = 0;
while (names[z] !== 'Elena') {
    console.log(names[z]);
    z++;
}

console.log('**********************************');
const addNames = ['Pippo', 'Pluto', 'Paperino'];
for (let i = 0; i < 3; i++) {
    console.log(`Ciclo Numero ${i}`);
    names.push(addNames[i]);
    let b = 0;
    while (b < names.length) {
        console.log(names[b]);
        b++;
    }
}

//break / continue
console.log('**********************************');

const numbers = [1, 25, 38, 12, 41, 75, 53, 46];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] > 30) {
        console.log(`Trovato ${numbers[i]} che è maggiore di 30`);
        break;
    }
}

console.log('**********************************');
const students = [
    {
        name: 'Mario Rossi',
        iscritto: true,
    },
    {
        name: 'Paolo Verdi',
        iscritto: true,
    },
    {
        name: 'Luca Bianchi',
        iscritto: false,
    },
    {
        name: 'Pino Rosso',
        iscritto: true,
    },
    {
        name: 'Aldo Verde',
        iscritto: true,
    },
    {
        name: 'Paolo Palla',
        iscritto: false,
    }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].iscritto === true) continue;
    console.log(`Lo studente ${students[i].name} non è ancora iscritto`);
}

//Cicli annidati
console.log('**********************************');
let maggiore = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maggiore) {
        maggiore = numbers[i];
    }
}

console.log(`Il numero maggiore è ${maggiore}`);

console.log('**********************************');

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j} `);
    }
}