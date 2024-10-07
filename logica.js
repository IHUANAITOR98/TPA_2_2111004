let cantidad1 = 0;
let cantidad2 = 0;
let beneficios1 = 0;
let beneficios2 = 0;
const cantidad1lab = document.getElementById("Cantidad_f1");
const cantidad2lab = document.getElementById("Cantidad_f2");
const beneficios1lab = document.getElementById("Beneficios_f1");
const beneficios2lab = document.getElementById("Beneficios_f2");

function getCantidad1() {
    return cantidad1;
}

function getCantidad2() {
    return cantidad2;
}

function getBeneficios1() {
    return beneficios1;
}

function getBeneficios2() {
    return beneficios2;
}

function printCantidades(){
    cantidad1lab.innerHTML = getCantidad1();
    cantidad2lab.innerHTML = getCantidad2();
}

function printBeneficios(){
    beneficios1lab.innerHTML = getBeneficios1();
    beneficios2lab.innerHTML = getBeneficios2();
}

function Calcular_cantidades(){
    let pendiente = document.getElementById("pendiente_input");
    let ponderante = document.getElementById("ponderacion_input");
    let Costos1 = document.getElementById("Costo1_input");
    let Costos2 = document.getElementById("Costo2_input");

    calculo1= (pendiente - (2*Costos1) + Costos2)/(3*ponderante)  ;   
    calculo2= (pendiente - (2*Costos2) + Costos1)/(3*ponderante)  ;   

    cantidad1= calculo1;
    cantidad2= calculo2;
    printCantidades();
}

function Calcular_beneficios(){
    let pendiente = document.getElementById("pendiente_input");
    let ponderante = document.getElementById("ponderacion_input");
    let Costos1 = document.getElementById("Costo1_input");
    let Costos2 = document.getElementById("Costo2_input");

    beneficios1 = ((pendiente-(ponderante*(cantidad1+cantidad2)))-Costos1)*cantidad1;
    beneficios2 = ((pendiente-(ponderante*(cantidad1+cantidad2)))-Costos2)*cantidad2;

    printBeneficios();
}