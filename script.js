// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.


const bici = [
    {
        nome: 'velocissima',
        peso: 50
    },
    {
        nome: 'veloce',
        peso: 50
    },
    {
        nome: 'corsa',
        peso: 35
    },
    {
        nome: 'elettrica',
        peso: 40
    }
]
console.log(bici);
// provo destructuring per array-
// const [biciUno, biciDue, biciTre, biciQuattro] = bici;
// console.log(biciUno, biciDue, biciTre, biciQuattro);

// creo funzione per estrapolare oggetto nome e peso con peso minore
function calcoloPesoMinore(gruppoOggetti) {
    let pesoMinore = gruppoOggetti[0].peso;
    let oggettoLeggero;
    for (let k = 0; k < gruppoOggetti.length; k++) {
        let oggettoAnalisi = gruppoOggetti[k];
        let pesoSingolo = oggettoAnalisi.peso
        if (pesoSingolo < pesoMinore) {
            oggettoLeggero = oggettoAnalisi;
            pesoMinore = oggettoLeggero.peso;
        }
    }
    return oggettoLeggero;
}
console.log(calcoloPesoMinore(bici));
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let biciPiuLeggera = calcoloPesoMinore(bici);
console.log(biciPiuLeggera);
let { nome, peso } = biciPiuLeggera;

console.log(` la bici più leggera è il nostro moldello "${nome}" che pesa solo ${peso} kg.`);

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
const footballTeam = [
    {
        nome: 'paperino',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'paperina',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'minnie',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'topolino',
        puntiFatti: 0,
        falliSubiti: 0
    }
];
console.log(footballTeam);
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
const randomNumber = () => Math.floor(Math.random() * 10);
console.log(randomNumber());
const [teamUno, teamDue, teamTre, teamQuattro] = footballTeam;
console.log(teamUno, teamDue, teamTre, teamQuattro);
for (let i = 0; i < footballTeam.length; i++) {
    let team = footballTeam[i];
    team.puntiFatti = randomNumber();
    team.falliSubiti = randomNumber();
};
console.log(teamUno, teamDue, teamTre, teamQuattro);
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const newDataFalliTeam = [];
for (let j = 0; j < footballTeam.length; j++) {
    let team = footballTeam[j];
    let { nome, falliSubiti } = team;
    newDataFalliTeam.push({ nome, falliSubiti });
}
console.log(newDataFalliTeam);


