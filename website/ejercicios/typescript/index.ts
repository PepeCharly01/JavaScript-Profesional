// Boolean
let muted: boolean = true;
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Carlos';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Victoria", "Selena", "Jenna"];
// people.push("9000")

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Daniel');
peopleAndNumbers.push(9001);

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any =  "Joker";
comodin = { type: 'wildcard'};

// Object
let someObject: object = { type: 'wildcard'};

// Funciones
function add(a: number, b: number): number {
    return a + b;
}
const sum = add(4, 6);

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName (firstName: string, lastName: string = 'Hernandez'): string {
    return `${firstName} ${lastName}`;
}

const jose = fullName('Jose');
console.log(jose);

// Interfaces
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());