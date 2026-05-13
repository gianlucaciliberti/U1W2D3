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

console.log('**********************************');

//SWITCH/CASE
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let today = 'Thursday';
switch (today) {
    case 'Monday':
        console.log('Oggi è lunedì');
        break;
    case 'Tuesday':
        console.log('Oggi è martedì');
        break;
    case 'wednesday':
        console.log('Oggi è mercoledì');
        break;
    case 'Thursday':
        console.log('Oggi è giovedì');
        break;
    case 'Friday':
        console.log('Oggi è venerdì');
        break;
    case 'Saturday':
        console.log('Oggi è sabato');
        break;
    case 'Sunday':
        console.log('Oggi è domeica');
        break;
};

if (today === 'Monday') {
    console.log('Oggi è lunedì');
} else if (today === 'Tuesday') {
    console.log('Oggi è martedì');
} else if (today === 'wednesday') {
    console.log('Oggi è mercoledì');
} else if (today === 'Thursday') {
    console.log('Oggi è giovedì');
} else if (today === 'Friday') {
    console.log('Oggi è veneedì');
} else if (today === 'Saturday') {
    console.log('Oggi è sabato');
} else {
    console.log('Oggi è domenica');
}

/* Switch/case e If/else if/else fanno la stessa cosa,
ma il primo è molto più veloce e preciso.*/

let price = 40;
switch (true) {
    case price <= 20:
        console.log(`il prezzo è ${price}`);
        break;
    case price > 20 && price <= 50:
        console.log(`Il prezzo scontato è ${price - price * 0.1} `);
        break;
    case price > 50 && price <= 80:
        console.log(`Il prezzo scontato è ${price - price * 0.15}`);
        break;
    default:
        console.log(`Il prezzo scontato ${price - price * 0.2}`);
        break;
}

//Introduzione alla manipolazione DOM (Document Object Model)
//Normalmente va scritto in alto

const colorsList = document.querySelector('body ul:nth-child(2)');

for (let i = 0; i < colori.length; i++) {
    colorsList.innerHTML += `<li class="listElement"> ${colori[i]}</li>`;
}

console.log(colorsList.innerHTML);

//querySelector + usato di getElementById perchè accetta anche selettori css