// JSSnack3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

'use strict';

const names = ['Alberto', 'Fabio', 'Cristian', 'Marco', 'Giuseppe', 'Filippo'];
const lastNames = ['Rossi', 'Bianchi', 'Sorrentino', 'De Luca', 'Galvani', 'Mancini'];

for (let i = 0; i < 3; i++) {
    const x = Math.floor(Math.random() * names.length);
    const y = Math.floor(Math.random() * lastNames.length);

    const randomName = `${names[x]} ${lastNames[y]}`;
    console.log(randomName);
}