class Nodo {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.hijos = [];
    }
}

const LeonorBallesteros = new Nodo("Leonor Ballesteros", null);
const MariaDoloresGutierrez = new Nodo("Maria Dolores Gutierrez", "25 de abril de 1949");
const VicenteBallesteros = new Nodo("Vicente Ballesteros", "5 de febrero de 1948");
const MarinaGutierrez = new Nodo("Marina Gutierrez de Ballesteros", null);
const FernandoBallesteros = new Nodo("Fernando Ballesteros", "6 de marzo de 1978");
const JavierRicardoBallesteros = new Nodo("Javier Ricardo Ballesteros", "6 de marzo de 1982");
const EmelinaTorres = new Nodo("Emelina Torres de Facundo", null);
const EmelinaFacundo = new Nodo("Emelina Facundo Torres", "15 de diciembre de 1956");
const HectorFabianSalinasFacundo = new Nodo("Hector Fabian Salinas Facundo", "23 de abril de 1989");
const LevisFernandaSierraFacundo = new Nodo("Levis Fernanda Sierra Facundo", "13 de diciembre de 1977");
const JuanSebastianBallesterosSierra = new Nodo("Juan Sebastian Ballesteros Sierra", "12 de agosto de 2003");
const JuanCamiloBallesterosSierra = new Nodo("Juan Camilo Ballesteros Sierra", "14 de enero de 2006");

LeonorBallesteros.hijos.push(VicenteBallesteros);
VicenteBallesteros.hijos.push(MarinaGutierrez);
MarinaGutierrez.hijos.push(FernandoBallesteros, JavierRicardoBallesteros);
FernandoBallesteros.hijos.push(JuanSebastianBallesterosSierra, JuanCamiloBallesterosSierra);

EmelinaTorres.hijos.push(EmelinaFacundo);
EmelinaFacundo.hijos.push(HectorFabianSalinasFacundo, LevisFernandaSierraFacundo);

// Pre-order traversal
function preOrder(node) {
    console.log(`${node.nombre} - Fecha de Nacimiento: ${node.fechaNacimiento}`);
    node.hijos.forEach(child => preOrder(child));
}

// In-order traversal
function inOrder(node) {
    if (node.hijos.length >= 2) {
        inOrder(node.hijos[0]);
        console.log(`${node.nombre} - Fecha de Nacimiento: ${node.fechaNacimiento}`);
        inOrder(node.hijos[1]);
    } else if (node.hijos.length === 1) {
        console.log(`${node.nombre} - Fecha de Nacimiento: ${node.fechaNacimiento}`);
        inOrder(node.hijos[0]);
    } else {
        console.log(`${node.nombre} - Fecha de Nacimiento: ${node.fechaNacimiento}`);
    }
}

// Post-order traversal
function postOrder(node) {
    node.hijos.forEach(child => postOrder(child));
    console.log(`${node.nombre} - Fecha de Nacimiento: ${node.fechaNacimiento}`);
}

console.log("Pre-order traversal:");
preOrder(LeonorBallesteros);
console.log("\nIn-order traversal:");
inOrder(LeonorBallesteros);
console.log("\nPost-order traversal:");
postOrder(LeonorBallesteros);
