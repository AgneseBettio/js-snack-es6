// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        nome: 'velocissima',
        peso: 30
    },
    {
        nome: 'veloce',
        peso: 50
    },
    {
        nome: 'corsa',
        peso: 65
    },
    {
        nome: 'elettrica',
        peso: 40
    }
]
console.log(bici);
const [biciUno, biciDue, biciTre, biciQuattro] = bici;
console.log(biciUno, biciDue, biciTre, biciQuattro);
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
console.log(` la bici più leggera è il nostro moldello "${biciUno.nome}" che pesa solo ${biciUno.peso} kg.`);