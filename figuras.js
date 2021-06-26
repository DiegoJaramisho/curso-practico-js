//codigo cuadrado
console.group("cuadrados");
// const ladoCuadrado = 5;
// console.log(`los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado){
    return lado*4;
} 
// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

// const areaCuadrado = ladoCuadrado*ladoCuadrado;
function areaCuadrado(lado){
    return lado*lado;

}
// console.log(`el area del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

//codigo triandulo

console.group("Triangulos");

function perimetroTriangulo(lado1,lado2,base){
    return  lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

console.groupEnd()

//codigo del circulo

console.group("Circulos");

function diametroCirculo(radio){
    return radio*2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}  

function areaCirculo(radio){
    return (radio*radio)*PI;
}
console.groupEnd
