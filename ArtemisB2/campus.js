/*
  console.log("Hello  campers artemis B ")
//1. Variables  ***** no comenzar con numeros
variable=10;
console.log(variable);

//1.1. Definicion de variables sin usar var, let, const

//1.2. Estilo de nombres de variables Js :using camel case 
let saldoCuentaCorriente = 50000
console.log(saldoCuentaCorriente);
let nombreGerente = "Edwing"

//1.3. Definicion de Variables using VAR /* 
/* podemos reasignar variables usando VAR podemos crear variable sin asignar valor con VAR */
/* ------------------------------------------------------------------------------------------------ */
 var saldo
 saldo = 34000
 console.log(saldo);
//2. Definicion de variables usando LET
/* ------------------------------------------------------------------------------------------------ */
/* podemos reasignar variables usando let 
   podemos crear variable sin asignar valor con let*/
let saldos
saldos = 67000
console.log(saldos);
//3. Data Types
/* typeof() */
//3.1 Number
let numeracion = 20;
console.log(numeracion);
console.log(typeof(numeracion));
//3.2 String Definition
//3.2.1 String - Definicion simple
let Cadena = "Campus"
//3.2.2 String - Definicion using String(' ')
let cadena = String('campus con string')
console.log(cadena);
//3.2.3 String - definition using new String(' ')
let cadenasString = new String ('Campus poo')
console.log(cadenasString);
//3.3  Some string methods
//3.3.0 length
let estudiante = "Edwing es un estudiante ejemplo y modelo a seguir"
console.log(estudiante.length);
//3.3.1 indexOf()
console.log(estudiante.indexOf('ejemplo'));
//3.3.2 includes()
console.log(estudiante.includes('modelo'));
//3.3.3 Concatenar Cadenas (Strings)
//3.3.3.1  concatenar string - using concat
cadenaFirts = "Edwing is the best student"
cadenaSecond="Campus is the best institute of the world"
console.log(cadenaFirts.concat("  ").concat(cadenaSecond));

//3.3.3.2 concatenar string - using + 
console.log("el camper: " + cadenaFirts+ "  And  " + cadenaSecond);
console.log("el camper: ","      " , cadenaFirts, "  And con coma  " , cadenaSecond);
//3.3.3.3 concatenar string using back ticks  o templatre strings ``
console.log(`El camperLand ${cadenaFirts} And at the same time  ${cadenaSecond}`);
//3.3.4 quitando espacios en blanco en String- trimStart().trimEnd()
let password = "      myPassword     "
console.log(password);
pw = password.trimStart().trimEnd()
console.log(pw);
//3.3.5 replacing - reemplazando en String*/
let mensaje  = " EL campeon que gano el giro de Italia fue Nairo Quintana "
console.log(mensaje.replace('gano','perdio'));
//3.3.6 slice  -  cortando de un String
console.log(mensaje.slice(15,19));
//3.3.7  substring  - subcadena de un String nos sirve así lo pongamos al contrario 
console.log(mensaje.substring(15,19));
//3.3.8 repeat() repitiendo un String 
console.log(mensaje.repeat(3));
//3.3.9 split - Dividir un String 
let publicity = "This advertising is amazing"
console.log(publicity.split(' '));

let diasSemana = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"
console.log(diasSemana.split(' '));
//3.3.10 Mayusculas y minusculas - ToUpperCase - ToLowerCase 
let apellidos = "Edwing Mejia"
console.log(apellidos.toUpperCase());
console.log(apellidos.toUpperCase());
/* const password1 = "Admin"
const password2 = "admin"
console.log(password1 === password2);  */



                    /* ----------------------EJERCICIOS--------------------------- */
//3.4 Boolean 
const valor = false 
console.log(valor);
console.log(typeof(valor));

/* Definicion de Variables using CONST*/
 const Continente = "America del Sur"
 const Pais ="Colombia"
 const Departamento = "Santander"
const  Ciudad = "Bucaramanga"
 let Barrio =  "Ricòn de Giròn"
 console.log("continete: "+Continente );
 console.log("Pais: "+ Pais) ; 
 console.log("Departamento: " + Departamento);
 console.log("Ciudad : " + Ciudad);
 console.log("Barrio : " + Barrio);
 let esTercerMundista =true
let Idioma = "Español"
console.log("Colombia es TercerMundista :" + esTercerMundista );


/* ------------------------------------------------------------------------------------------------ */
/* ------> no podemos reasignar valores   YY   las constantes deben tener un valor
*/
const nombre = "Joel"
console.log(nombre);
console.log(typeof(nombre));
/* const can't re-asing */
/* nombre = 30; */
/* console.log(nombre); */
//3.5 undefined 
let valores   
console.log(valores);
console.log(typeof(valores));

//3.6 BigInt 
let numeroGrande = 12231244124124242142
console.log(numeroGrande)
console.log(typeof(numeroGrande));
//3.7 objeto 
const objetoCampus = {
  nombre : "Nairo Quintana",
  nombre : 33, 
  Pais : "Colombia",
  insWinner : true
}

console.log(objetoCampus);

//4.  Operadores
/* -------------------------------------------------------------------------------------- */
//4.1 Operadores numericos 
let a = 3
let b = 4


 let z = a + b 
console.log(`Resultado de la suma fue : ${z}`);

z = a - b 
console.log(`Resultado de la suma fue : ${z}`);

z = a * b 
console.log(`Resultado de la suma fue : ${z}`);

z = a / b 
console.log(`Resultado de la suma fue : ${z}`);

z = a % b 
console.log(`Resultado de la suma fue : ${z}`);

z = a ** b 
console.log(`Resultado de la suma fue : ${z}`);


//OPERADORES DE ASIGNACION
//Incremento
 let a2 = 3
 let b2 = 2
 let z2 = a2 + b2
//Pre-incremento (el operador ++ antes de la variable)
 z2 = ++a2
 console.log(a2);
 console.log(z2);

//Post-incremento (el operador ++ despues de la variable)
//
z2 = b2++;
console.log(b2);
console.log(z2);
//


//Decremento

z2 = --a2;
console.log(a2);
console.log(z2); 

//Predecremento (el operador -- antes de la variable)

//Postdecremento  (el operador -- despues de la variable)

z2 = b2--;
console.log(b2);
console.log(z2);

//Precedencia
/* -------------------------------------------------------------------------------------------- */
let a3 = 3
let b3 = 2
let c3 = 4
let d3 = 1
let z3 = a3 * b3 + c3 / d3;
console.log(z3);

z3 = c3 + a3 * b3 / d3; 
console.log(z3);

z3 = (c3 + a3) * b3 / c3 ;
console.log(z3);

//4.2 operadores de asignacion  =   +=   -=
/* ----------------------------------------------------------------------------------- */
let a4 = 1 ; 
a4 = a4 + 3 // a4 += 3   
console.log(a4);
a4 -=  - 2 // a4 -= 2



console.log(a4);
a4 *=  2
console.log(a4);
a4 /=  2
console.log(a4);
a4 %=  4
console.log(a4);
a4 **= 4
console.log(a4);
//4.3 Operadores de comparacion 
//4.3.1 - Igual A
// == se revisa el valor sin importar el tipo
let a5 = 3;
let b5 = 2;
let c5 = "3";

let z5 = a5 == c5 ;
console.log(z5);
z5 = a5 === c5;
console.log(z5);



// === revisa los valores pero tambien los tipos
/* ----------------------------------------------------------------------------------------- */

/* Operadores de comparacion - 
//4.3.2 Diferente A
/* != se revisa el valor sin importar el tipo 
/* !== revisa los valores pero tambien los tipos 
/* ------------------------------------------------------------------------------------------- */

let a6 = 3;
let b6 = 2;
let c6 = "3"

let z6 = a6 != c6
z6 = a6 !== c6
console.log(z6);
//4.4 Ejercicio operadores 
// operadores de comparacion 

let i = 100
let j = "100"

console.log(i==j);//true 
console.log(i ===j);//false

console.log(i != j);//false
console.log(i !== j);//true

let numeracion2 = "200"

let conv = parseInt(numeracion2)
conv = Number(numeracion2)

//4.5 Conviertiendo tipos de datos  parseInt()
console.log(i === parseInt(j));



//4.6 comparando null con undefined 

let marca 
console.log(marca);

let marcas = null;
console.log(marcas == marca);
console.log(marca === marcas);
/* 5. SENTENCIAS DE CONTROL */
/* ------------------------------------------------------------------------------------ */
let condicion = true;

if (condicion === true){
  console.log("condición Verdadera");
  console.log("fin de programa");
}
else{
  console.log("condición Falsa");
}

/* 5.1 IF - EJERCICIO - si numero igual a 2 imprimir "numero dos" etc. */

let numeroIf = 2
if (numeroIf == 1){
  console.log("Numero uno");
}
else if (numeroIf== 2){
  console.log("Numero Dos");
}
else if (numeroIf== 3){
  console.log("Numero Tres");
}
else if (numeroIf== 4){
  console.log("Numero Cuatro");
}
else if (numeroIf== 5){
  console.log("Numero cinco");
}
else if (numeroIf== 6){
  console.log("Numero Seis");
}
else if (numeroIf== 7){
  console.log("Numero Siete");
}
else if (numeroIf== 8){
  console.log("Numero Ocho");
}
else if (numeroIf== 9){
  console.log("Numero Nueve");
}
else{
  console.log("Numero desconocido");
}
// 5.2 CASE 
let numberCase = 3;
let numberText = "valor desconocido"

switch (numberCase) {
  case 1:
    numberText = "Numero uno"
    break;
  case 2 : 
    numberText = "Numero dos"
    break;
  case 3:
    numberText = "Numero tres"
    break;
  case 4:
      numberText = "Numero cuatro" 
    break;
  case 5 : 
      numberText = "Numero cinco" 
      break;
  case 6:
      numberText = "Numero seis"
      break;       
  case 7:
        numberText = "Numero siete"
        break;
  case 8 : 
   numberText = "Numero ocho"
  break;       
  case 9:
    numberText = "Numero nueve" 
    break;
    default :
    numberText = "Valor desconocido"

}
console.log(numberText);
// 5.3 CICLOS 
//5.3.1 WHILE 
let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
}
console.log("Fin del ciclo Do While");

//5.3.2 DO WHILE
let contador2 = 0
do{
  console.log(contador2);
  contador2++;
} while (contador2 < 3);

console.log("Fin del ciclo Do While");
//5.3.3 FOR
for (let contador = 0 ; contador < 3 ; contador++ ){
console.log(contador);
} 
console.log("Fin del ciclo For");
//5.3.4 BREAK
//alert("Atención")

//const estudiantes = Number(prompt("Digite la cantidad de estudiantes: "))
 //if (estudiantes === 50){
  //console.log(estudiantes);
 //}//

//5.3.5 CONTINUE

/* 5.4 LABELS - ETIQUETAS */

                    /* ----------------------EJERCICIOS--------------------------- */
/*

//1.0
// Saldrá los anuncios sobre Ingresar la nota
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

//Es para calcular las 3 notas 
let Sumadenotas = (nota1 + nota2 + nota3) / 3;

// Muestra los mensajes según la clasificación 
if (Sumadenotas <= 3.9) {
  console.log("Estudie");
} else {
  console.log("Becado");
}
  
//2.0
//El usuario va a ingresar los numeros
let numero = parseFloat(prompt("Ingresa el numero"));
if(numero%2===0){
  console.log("El numero es par");
}
else{
  console.log("El numero es Impar");
}

if(numero >= 10){
  console.log("Es mayor");
}
else {
  console.log("Es menor");
}

//3.0
 //variables
let resistencia = 0; 
let corriente = 0; 
let voltaje = 0; 

// valores de resistencia y corriente
resistencia = parseFloat(prompt("Ingrese el valor de la resistencia :"));
corriente = parseFloat(prompt("Ingrese el valor de la corriente :"));

// voltaje

voltaje = resistencia * corriente;

// Mostrar resultado 
console.log("El voltaje del circuito es de " + voltaje + " voltios");

//4.0
// variables
let nombre1, nombre2, nombre3;
let edad1, edad2, edad3;
let mayorEdad;

// nombre y edad de la persona 1
nombre1 = prompt("Ingrese el nombre de la persona 1:");
edad1 = parseInt(prompt("Ingrese la edad de la persona 1:"));

// nombre y edad de la persona 2
nombre2 = prompt("Ingrese el nombre de la persona 2:");
edad2 = parseInt(prompt("Ingrese la edad de la persona 2:"));

//  nombre y edad de la persona 3
nombre3 = prompt("Ingrese el nombre de la persona 3:");
edad3 = parseInt(prompt("Ingrese la edad de la persona 3:"));

// Comparación para hayar el nombre con la mayor edad
if (edad1 > edad2 && edad1 > edad3) {
  mayorEdad = nombre1;
} else if (edad2 > edad1 && edad2 > edad3) {
  mayorEdad = nombre2;
} else {
  mayorEdad = nombre3;
}

// Mostrar resultado 
console.log("La persona con mayor edad es: " + mayorEdad);

//5.0
//  variables
let num1, num2;
let suma, diferencia, producto, division;

// Pedir al usuario que ingrese los números
num1 = parseFloat(prompt("Ingrese el primer número:"));
num2 = parseFloat(prompt("Ingrese el segundo número:"));

// verifica si es > el n1 al n2
if (num1 > num2) {
  // suma y resta
  suma = num1 + num2;
  diferencia = num1 - num2;
  
  // Mostrar el resultado 
  console.log("La suma de los números es: " + suma);
  console.log("La diferencia de los números es: " + diferencia);
} else {
  // Multiplicación y división
  producto = num1 * num2;
  division = num1 / num2;
  
  // Mostrar el resultado 
  console.log("El producto de los números es: " + producto);
  console.log("La división del primer número respecto al segundo es: " + division);
}
*/
//6.0
/* // variables
let estudiantes = [];
let notaMayor = 0, notaMenor = 100;
let estudianteMayorNota, estudianteMenorNota;
let cantidadHombres = 0, cantidadMujeres = 0;

// Estudiantes
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes:"));

// Leer la información de cada estudiante
for (let i = 0; i < cantidadEstudiantes; i++) {
  // Definir un objeto para almacenar la información de cada estudiante
  let estudiante = {};

  //  nombre, sexo y nota definitiva del estudiante
  estudiante.nombre = prompt("Ingrese el nombre del estudiante:");
  estudiante.sexo = prompt("Ingrese el sexo del estudiante (Masculino o Femenino):");
  estudiante.nota = parseFloat(prompt("Ingrese la nota definitiva del estudiante:"));

  // Verificar si la nota del estudiante es la > o la <
  if (estudiante.nota > notaMayor) {
    notaMayor = estudiante.nota;
    estudianteMayorNota = estudiante;
  }

  if (estudiante.nota < notaMenor) {
    notaMenor = estudiante.nota;
    estudianteMenorNota = estudiante;
  }

  // Agregar el estudiante al arreglo de estudiantes
 


  // Incrementar el contador de hombres o mujeres según corresponda
  if (estudiante.sexo === "Masculino") {
    cantidadHombres++;
  } else if (estudiante.sexo === "Femenino") {
    cantidadMujeres++;
  }
}

// Mostrar los resultados por consola
console.log(`El estudiante con la mayor nota es: ${estudianteMayorNota.nombre} (${estudianteMayorNota.sexo}) - Nota: ${estudianteMayorNota.nota}`);
  console.log(`El estudiante con la menor nota es: ${estudianteMenorNota.nombre} (${estudianteMenorNota.sexo}) - Nota: ${estudianteMenorNota.nota}`); 
  console.log(`Cantidad de hombres: ${cantidadHombres}`); */
/*   console.log(`Cantidad de mujeres: ${cantidadMujeres}`);   */

/*
//7.0

//  nombre y precio del artículo, así como la cantidad comprada
let nombreArticulo = prompt("Ingrese el nombre del artículo:");
let precioArticulo = parseFloat(prompt("Ingrese el precio del artículo:"));
let cantidadComprada = parseInt(prompt("Ingrese la cantidad comprada:"));

//  total a pagar 
let totalAPagar = precioArticulo * cantidadComprada;

// Mostrar  factura
console.log(`Factura`);
console.log(`Artículo: ${nombreArticulo}`);
console.log(`Precio por unidad: ${precioArticulo}`);
console.log(`Cantidad comprada: ${cantidadComprada}`);
console.log(`Total a pagar: ${totalAPagar}`);

//8.0
//  lado del cuadrado
const ladoCuadrado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"));

//  perímetro del cuadrado
const perimetroCuadrado = ladoCuadrado * 4;

// Mostrar el resultado en la consola
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}`);

//  base y la altura del rectángulo
const baseRectangulo = parseFloat(prompt("Ingrese el valor de la base del rectángulo:"));
const alturaRectangulo = parseFloat(prompt("Ingrese el valor de la altura del rectángulo:"));

// área del rectángulo
const areaRectangulo = baseRectangulo * alturaRectangulo;

// Mostrar el resultado en la consola
console.log(`El área del rectángulo es: ${areaRectangulo}`);

//9.0
// número de atletas finalistas
const numAtletas = parseInt(prompt("Ingrese el número de atletas finalistas:"));

// Almacenar el n de Atltetas
const atletas = [];

// nombres y las marcas de cada atleta
for (let i = 0; i < numAtletas; i++) {
  const nombre = prompt(`Ingrese el nombre del atleta ${i+1}:`);
  const marca = parseFloat(prompt(`Ingrese la marca de salto de ${nombre} (en metros):`));
  atletas.push({nombre: nombre, marca: marca});
}

// la atleta con la marca más alta
let campeona = atletas[0];
for (let i = 1; i < atletas.length; i++) {
  if (atletas[i].marca > campeona.marca) {
    campeona = atletas[i];
  }
}

//nombre de la atleta campeona
console.log(`La atleta campeona es: ${campeona.nombre}`);

// Verificar si se rompió el récord y mostrar el resultado
if (campeona.marca > 15.5) {
  console.log("La atleta campeona rompió el récord y recibirá un pago de 500 millones.");
} else {
  console.log("La atleta campeona no rompió el récord.");
}



//10.0
//variables
let suma1 = 0;
let contador1 = 0;
let mayor = Number.NEGATIVE_INFINITY;
let menor = Number.POSITIVE_INFINITY;
let valor1 = parseFloat(prompt("Ingrese un valor (digite 0 para detener el programa):"));

//Leer valores y acumular información hasta que se ingrese un 0
while (valor1 !== 0) {
  // suma y el contador
  suma1 += valor1;
  contador1++;

  //mayor y el menor valor
  if (valor1 > mayor) {
    mayor = valor1;
  }
  if (valor1 < menor) {
    menor = valor1;
  }

  // Pedir el siguiente valor
  valor1 = parseFloat(prompt("Ingrese otro valor (digite 0 para detener el programa):"));
}

//promedio
const promedio = suma1 / contador1;
//Mostrar los resultados en la consola
console.log(`La sumatoria de los valores es: ${suma1}`);
console.log(`El valor del promedio es: ${promedio}`);
console.log(`Se digitaron ${contador1} valores.`);
console.log(`El mayor valor digitado es: ${mayor}`);
console.log(`El menor valor digitado es: ${menor}`);


//Creado by : Edwing Stiven Mejia Saenz Artemis B //

//---------Taller número3 -------//
//Creado by : Edwing Stiven Mejia Saenz Artemis B //

let campus = {
  sedes: {
      Bucaramanga: {
          telefono: "+576076333987",
          direccion: "MANZANA MZ C LOTE 2 ZF SANTANDER, FLORIDABLANCA,"
      },
      Bogotá: {
          telefono: "6014046644",
          direccion: "Cra 106 No. 15a-25, Bogotá, Colombia 057"
      },
      Medellin: {
          telefono: "+5742163467",
          direccion: "calle 49 # 33-92, Medellín, Antioquia 050013"
      },
      México: {
          telefono: "+52 477 718 1485",
          direccion: "San Luis 120, 37500 León, Guanajuato"
      }
  },
  trainers: {
      treiner1: {
          nombre: "Vermen",
          telefono: "+573208502824",
          email: "vermen.ayala@campuslands.com",
          salon : "ArtemisA",
          asignaturaTecnologia :{
            Remota: "si, es remota",
            Presencial :"Si, es presencial",
            tieneSandbox: "si tiene sandbox",
            requisito : "saber css y HTML"
      },
      trainer2: {
          nombre : "Johlver",
          telefono: "+57289382489",
          email: "Johlver@campuslands.com",
          salon : "Apolo",
          asignaturaTecnologia :{
            Remota: "si, es remota",
            Presencial :"Si, es presencial",
            tieneSandbox: "si tiene sandbox",
            requisito : "saber css y HTML"
      },
      trainer3: {
          nombre : "Miguel",
          telefono: "+5789238832",
          email: "Miguel@campuslands.com",
          salon : "Sputnik",
          asignaturaTecnologia :{
            Remota: "si, es remota",
            Presencial :"Si, es presencial",
            tieneSandbox: "sí, tiene sandbox",
            requisito : "saber css y HTML"
      },
    },
  }
  },
  campers: [
      {
          nombre: "Edwing Stiven Mejia Saenz",
          telefono: "+573167069655",
          email: "Edwingstiven2023@gmail.com",
          teams: {
              teams: {
                  Team1: {
                      dia: "lunes a Viernes ",
                      hora: "6:00Am - 2:00Pm",
                      salon: "Artemis"
                  },
              }
          },
          horariosIngles: {
              dia: "Lunes a Viernes",
              hora: "9:00Am - 10:00Am",
              salon: "Aula de reuniones"
          },
          horariosSer: {
              dia: "Lunes a Viernes",
              hora: "8:00Am - 9:00Am",
              salon: "Aula de reuniones"
          },
          nivelActual: "Intermedio",
          barrio: "Rincón de Girón",
          medioTransporte: "Carro"
      },
      {
          nombre: "Jesus caceres",
          telefono: "3456745747",
          email: "jesuscaceres@gmail.com",
          piso : 6,
          teams: {
              Team2: {
                  dia: "lunes a Viernes ",
                  hora: "6:00Am - 2:00Pm",
                  salon: "Sptunik",
                  piso : 6,
              }
          },
          horariosIngles: {
              dia: "Lunes a Viernes",
              hora: "10:00Am - 11:00Am",
              salon: "Aula de reuniones"
          },
          horariosSer: {
              dia: "Lunes a Viernes",
              hora: "11:00Am - 12:00Pm",
              salon: "Aula de reuniones"
          },
          nivelActual: "Avanzado",
          barrio: "Bucaramanga",
          medioTransporte: "Metro"
      }
  ],
  tecnologias : {
    camper1:{
        tecnologiaQuePertenece: "obligatoria"
    },
    camper2 : {
        tecnologiaQuePertenece :"electiva"
    },
  },
  roadMap: {
      nroCreditos: 1,
      año: 2023,
      nroAsignaturas: {
        Frontend : 1,
        Backend : 1,
      }
  }
}
} 
  /* 2. Consultas: Usando Destructuring,
2.1 De los trainers, reportar si la asignatura (tecnología) es
remota o presencial y de los campers el nombre de salón.
2.2 El teléfono de la sede de Medellín y la dirección de la
sede de Bucaramanga
2.3 De la asignatura (tecnología) si tiene sandbox o n*/
/* 

const {trainers:{treiner1:{asignaturaTecnologia:{Presencial}}}}  = campus
console.log(Presencial)

const{trainers:{treiner1:{salon}}} = campus 
console.log(salon)

// 2.2

const{sedes:{Medellin:{telefono}}} = campus
console.log(telefono)

const{sedes:{Bucaramanga:{direccion}}} = campus
console.log(direccion)

//2.3

const {trainers:{treiner1:{asignaturaTecnologia:{tieneSandbox}}}}  = campus
console.log(tieneSandbox)



/*3. Consultas: Usando sintaxis de punto.
3.1 Reportar, prerequisito de la asignatura (tecnología) y nro de
créditos del roadmap */

/* console.log(campus.trainers.treiner1.asignaturaTecnologia.requisito)
 */
/*
3.2 Agregar mas objetos con mas objetos anidados de manera libre
(por lo menos 7)



  /* 2. Consultas: Usando Destructuring,


/* --------6 OBJETOS--------- */
/* --------------------------------------------------------------------------------------- */

//Objetos en JS//

//Variables//

/* const mascota = "Luna"
const cliente = "Juan"
const factura = 5000
const servicio = "peluqueria" */

//6.1. Objetos literales//

/* const veterinaria = {
  mascota : "Luna",
  cliente : "juan",
  factura : 5000,
  servicio : "peluqueria"

}

const customer = {
  name: "juan",
  sales: {
    year: 2020,
    salesman: "pedro",
    month: "january"
  },
  age: 20,
  celular: 320999999,
  socialSecurity: {
    id: 21253,
    health: "colsanitas",
    company: "sura"
  }

}

//6.2. Acceso a valores del objeto//

//6.2.1 sintaxis de punto//
console.log(customer.socialSecurity.company);

console.log(customer.sales.month);

//6.2.2 agregar propiedades del objeto//

veterinaria.foto = "luna.jpg"
console.log(veterinaria);

//6.2.3 eliminar propiedades del objeto//

delete veterinaria.foto
console.log(veterinaria);

//6.3. Asignar valores de propiedad de objeto a variable - Object Destructuring//

const {factura} = veterinaria
console.log(factura);

const {mascota} = veterinaria 
console.log(mascota);

//6.4. Objetos dentro de objetos//

const centroComercial = {
  gerente: "Jose",

  baños: {
    bañosH: {
      espacios: 12,
      color: "Blanco"
    },
    bañosM: {
      espacios: 12,
      color: "blanco"
    }
  },

  tiendas: {
    Popsy:{
      productos: {
        producto1: "helado",
        producto2: "hamburguesa",
        producto3: "papas"
      }
    },

    creepsWafles:{
      productos: {
        producto1: "creeps",
        producto2: "helados",
        producto3: "wafles"
      }
    }

    
  },

  seguridad: {
    CantVigilantes: {
      vigilante1: "juan",
      vigilante2: "julian"
    }
  },

  parqueadero: {
    espacios: {
      carros: 24,
      motos: 15
    }
     
  }


}

console.log(centroComercial);

//6.5. Destructuring de objetos anidados//

const {baños:{bañosM}} = centroComercial
console.log(bañosM);

const {tiendas:{creepsWafles:{productos}}} = centroComercial
console.log(productos);
//6.6.metodos objetos// */

//6.6.1 congelar  .freeze//

/* console.log((centroComercial.gerente = "Don Tu")); */



//7.  this 

//8. Objeto Constructor

/*9.--------ARRAYS--------- */
/* -------------------------------------------------------------------------------------- */

//* * 9.  Recordando objetos */
  /* const buseata = {
    conductor:"Pedro",
    sillas : 20,
    placa : "143232-der"
  }
  // 9.1  Creando arreglo
  
  const arreglo =  [1,2,3]
  console.log(arreglo);

  const seguidores = [1,2,3,[100,200,300]]
console.log(seguidores);
  //9.2 acceder a los elementos del arreglo
  console.log(seguidores[3][3]);
  //9.3 recorrer un array
  for(let i = 0; i < seguidores.length; i++){
    console.log(seguidores[i]);
  }
  //9.4  agregar nuevos valores al final de un array 
seguidores[4] = "Valor";
  //9.5 agregar elemento al final sin conocer longitud del arreglo - Push
  seguidores.push = "domingo"
  console.log(seguidores);
  //9.6 Agregando objetos a un arreglo 
  /* const carritoCompras =[];
  const producto1 = {
    nombre: "automovil",
    precio: 5000000
  }

  const producto2 = {
    nombre: "camion",
    precio: 90000000
  }

  const producto3 = {
    nombre: "bicicleta",
    precio: 1200000
  } 

  carritoCompras.push(producto1,producto2,producto3)
  console.log(carritoCompras);
  //9.7 Eliminar ultimo elemento del arreglo - pop()
    carritoCompras.pop()
  console.log(carritoCompras);  
  //9.8 Eliminar primer elemento del arreglo - shift()
  
  carritoCompras.shift();
  console.log(carritoCompras); 

  /* carrito.shift();
  console.log(carrito); */
  
  //9.9 eliminar cualquier elemento/splice
  /* carritoCompras.splice(1,1)
  console.log(carritoCompras); 
  //10.  DESTRUCTURING - ARRAYS ...
  const WeekDays = ["Lunes", "Martes","Miercoles","Jueves","Viernes",
"Sabado","Domingo"]
  const [primero, segu ,  tercero, ...elrestodedias ] = WeekDays
  console.log(primero);
  console.log(segu);
  console.log(tercero); */
 
  /* console.log(elrestodedias); */
  //11.  Iterar un array con objetos como elementos
 
  //11.1 Iterar con FOR  
  
  //11.2 Iterar con ForEach 
  const portatil={
    marca:"Hp",
    precio:40000,
  }
  const printer = {
    marca:"Epson",
    precio:10000
  }
  const VirtualStore = []
  VirtualStore.push(portatil,printer)
  console.log(VirtualStore);

  VirtualStore.forEach((elemento)=>{
    console.log(`iterando con map ${elemento.marca} - ${elemento.precio}`);
  })
  //11.3 Iterar con Map  
  
  //12. FUNCIONES */
  /* ------------------------------------------------------------------------------------------------- */
  
  /* 12.1 Function Declaration */
  function suma(num1,num2) {
    console.log(num1+num2);
  }
  suma(3,2)
  /* 12.2 Function Expression */
  const sumar2 = function (nro1,nro2) {
    console.log(nro1+nro2);
  }
sumar2(3,4)
  /* 12.3 comunicacion entre funciones */

  cicloDeVidaSoftware("Planificacion")

  function cicloDeVidaSoftware(planificacion){
    console.log(`La primera fase del ciclo de vida es: ${planificacion}`);
  analisis("Analisis") 
  }

  function analisis(analisis){
    console.log(`La segunda fase del ciclo de vida es :${analisis}`);
  dising("")
  }

  function  dising(dising) {
    console.log(`La tercera fase del ciclo de vida es: ${dising}`);
    desarrollo("Creacion del medio")
  }
  function  desarrollo(desarrollo) {
    console.log(`El desarrolo es: ${desarrollo}`);
  }


  /* 12.4 Agregar funciones a objetos - metodos de propiedad */
  
  const CampusLand = {
    study: function (book) {
      console.log(`Los campers están estudiando el libro de : ${book}`);
    },
    write:function (ensayo) {
      console.log(`Los campers están escribiendo un ensayo de : ${ensayo}`);
    },
    read:function(luna){
      console.log(`Los campers están leyendo un anuncio de: ${luna}`);
    },
    developers:function(development){
      console.log(`Los campers están programando con un nivel : ${development}`);
    }
  }

  
  CampusLand.study("JavaScript")
  CampusLand.write("positive intelligence")
  CampusLand.read("Programación")
  CampusLand.developers("Fullstacks")
  /* 12.5 Arrow functions */
  const verTv = amor=> `La tv se disfruta en las tardes ${amor}`;
  
  console.log(verTv("con el amor de mi esposita"))

  /* const verTvs = () => {
    console.log(`la tvs se mira en las tardes`);
  }; */
  
  /* const verTvs = () => console.log(`la tvs se mira en las tardes`);
  verTvs();
   */
  
  /* de una sola linea */
  
  // parametros en arrow functions

  //-----Ejercico final de taller de JavaScript ------//

  function mostrarMenu() {
    let opcion = -1;
    do {
      opcion = parseInt(prompt(`—————— Menu Edwing el mejor ——————
      1. Lectura de datos
      2. Crear objeto 
      3. Mostrar objeto
      4. Crear Array
      5. Mostrar Array
      6. Eliminar primer elemento del Array
      7. Eliminar el último elemento de Array 
      8. Eliminar cualquier elemento del Array
      9. Agregar elemento al comienzo del Array
      10. Agregar elemento al final del Array 
      11. Crear array con objetos 
      12. Iterar array con objetos con for
      13. Iterar array con objeto con ForEach
      14. Iterar array con objetos con Map y crear copia
      15. Proceso personal
      0. Salir`));

      switch(opcion) {
         case 1:
          function leerDatos() {
            let nombre = prompt("Ingrese su nombre");
            let edad = parseInt(prompt("Ingrese su edad"));
            console.log(`Su nombre es ${nombre} y su edad es ${edad}`);
          }
          
          break;
         case 2:
          function crearObjeto() {
            let persona = {
              nombre: "Edwing",
              edad: 19,
              correo: "edwingstiven2023@gmail.com"
            };
            console.log(persona);
          }
          
          break;
         case 3:
          function mostrarObjeto() {
            let persona = {
              nombre: "Edwing",
              edad: 19,
              correo: "edwingstiven2023@gmail.com"
            };
            for (let propiedad in persona) {
              console.log(`${propiedad}: ${persona[propiedad]}`);
            }
          }
          
          break;
         case 4:
          function crearArray() {
            let numeros = [1, 2, 3, 4, 5];
            console.log(numeros);
          }
          
          break;
         case 5:
          function mostrarArray() {
            let numeros = [1, 2, 3, 4, 5];
            for (let i = 0; i < numeros.length; i++) {
              console.log(numeros[i]);
            }
          }
          
          break;
         case 6:
          function eliminarPrimerElemento() {
            let numeros = [1, 2, 3, 4, 5];
            numeros.shift();
            console.log(numeros);
          }
          
          break;
         case 7:
          function eliminarUltimoElemento() {
            let numeros = [1, 2, 3, 4, 5];
            numeros.pop();
            console.log(numeros);
          }
          
          break;
         case 8:
          function eliminarElemento() {
            let numeros = [1, 2, 3, 4, 5];
            let indice = parseInt(prompt("Ingrese el índice del elemento a eliminar"));
            numeros.splice(indice, 1);
            console.log(numeros);
          }
          
          break;
         case 9:
          function agregarAlComienzo() {
            let numeros = [1, 2, 3, 4, 5];
            let elemento = parseInt(prompt("Ingrese el elemento a agregar al comienzo del array"));
            numeros.unshift(elemento);
            console.log(numeros);
          }
          
          break;
         case 10:
          function agregarAlFinal() {
            let numeros = [1, 2, 3, 4, 5];
            let elemento = parseInt(prompt("Ingrese el elemento a agregar al final del array"));
            numeros.push(elemento);
            console.log(numeros);
          }
          
          break;
         case 11:
          function crearArrayObjetos() {
            let personas = [
              { nombre: "Stiven", edad: 19, correo: "edwingstiven20@gmail.com" },
              { nombre: "Andres", edad: 18, correo: "andresraul@gmail.com" },
              { nombre: "Jairo", edad: 17, correo: "jairo@gmail.com" }
            ];
            console.log(personas);
          }

          break;
         case 12:
        function iterarArrayFor() {
          let personas = [
            { nombre: "Stiven", edad: 19, correo: "edwingstiven20@gmail.com" },
            { nombre: "Andres", edad: 18, correo: "andresraul@gmail.com" },
            { nombre: "Jairo", edad: 17, correo: "jairo@gmail.com" }
          ];
          for (let i = 0; i < personas.length; i++) {
            console.log(`${personas[i].nombre} - ${personas[i].edad} años - ${personas[i].correo}`);
          }
        }

          break;
         case 13:
          function iterarArrayForEach() {
            let personas = [
              { nombre: "Stiven", edad: 19, correo: "edwingstiven20@gmail.com" },
              { nombre: "Andres", edad: 18, correo: "andresraul@gmail.com" },
              { nombre: "Jairo", edad: 17, correo: "jairo@gmail.com" }
            ];
            personas.forEach(function(persona) {
              console.log(`${persona.nombre} - ${persona.edad} años - ${persona.correo}`);
            });
          }
          
          break;
         case 14:
          function iterarArrayMap() {
            let personas = [
              { nombre: "Stiven", edad: 19, correo: "edwingstiven20@gmail.com" },
              { nombre: "Andres", edad: 18, correo: "andresraul@gmail.com" },
              { nombre: "Jairo", edad: 17, correo: "jairo@gmail.com" }
            ];
            let personasCopia = personas.map(function(persona) {
              return { ...persona };
            });
            console.log(personasCopia);
          }
          
          break;
         case 15:
          function procesoPersonal() {
            let numeros = [5, 7, 3, 1, 9];
            let suma = 0;
            for (let i = 0; i < numeros.length; i++) {
              suma += numeros[i];
            }
            let promedio = suma / numeros.length;
            console.log(`El promedio de los números es ${promedio}`);
          }
          
          break;
         case 0:
          alert("Saliendo del menu");
          break;
        default:
          alert("No es correcto tu elección");
          break;
      }
    } while (opcion != 0);
  }
  
  mostrarMenu();

  //Edwing Stiven Mejia Saenz---Artemis B2-----//
  
  