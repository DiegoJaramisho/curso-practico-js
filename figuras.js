//cuadrados
console.group("cuadrados");

function perimetroCuadrado(lado){
    return lado*4;
} 

function areaCuadrado(lado){
    return lado*lado;

}

console.groupEnd();


//triangulos
console.group("Triangulos");

function perimetroTriangulo(lado1,lado2,base){
    
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

console.groupEnd();



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
console.groupEnd;

//interactuamos con html
//cuadrados
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;
    
    const area = areaCuadrado(valor);
    alert(area);
}

//triangulo
function calcularPerimetroTriangulo(){
    const ladoa = document.getElementById("inputLadoA");
    const valora= parseInt(ladoa.value);
    const ladob = document.getElementById("inputLadoB");
    const valorb = parseInt(ladob.value);
    const ladoc = document.getElementById("inputLadoC");
    const valorc = parseInt(ladoc.value);
    
    const perimetro = perimetroTriangulo(valora,valorb,valorc);
    alert(perimetro);
    
}
function calcularAreaTriangulo(){
    const base = document.getElementById("inputBase");
    const valorBase = base.value;
    const altura = document.getElementById("inputAltura");
    const valorAltura = altura.value;

    const area = areaTriangulo(valorBase,valorAltura);
    alert(area);
}

//circulo

function calcularDiametroCirculo(){
    const radio = document.getElementById("inputRadio");
    const valorRadio = radio.value;

    const diametro = diametroCirculo(valorRadio);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputRadio");
    const valorRadio = radio.value;

    const perimetro = perimetroCirculo(valorRadio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputRadio");
    const valorRadio = radio.value;

    const area = areaCirculo(valorRadio);
    alert(area);
}


