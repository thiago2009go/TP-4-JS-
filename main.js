// ACTIVIDAD 4 - PRE-ENTREGA 4
// Continuación del Trabajo 3: Simulador de notas.
// Funcion para agregar un estudiante
function agregarEstudiante() {
    const nombre = document.getElementById("nuevoEstudiante").value.trim();

    if (nombre === "") {
        alert("Ingresá el nombre del estudiante.");
        return;
    }

    estudiantes.push(nombre);

    alert(nombre + " fue agregado correctamente.");

    document.getElementById("nuevoEstudiante").value = "";

    console.log("Lista actualizada:", estudiantes);
}
// Función original del Trabajo 3: solicita un dato al usuario.
function pedirNombre(mensaje) {
    return prompt(mensaje);
}

// Función original del Trabajo 3: calcula el promedio de dos notas.
function calcularPromedio(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Función flecha original: indica si el estudiante aprobó.
const aprobo = (promedio) => promedio >= 7;

// Array con cinco estudiantes iniciales del simulador.
const estudiantes = ["Ana", "Juan", "Sofía", "Mateo", "Lucía"];

console.log("===== SIMULADOR DE NOTAS =====");
console.log("Lista inicial: " + estudiantes.join(", "));

// 1. push(): agrega un estudiante al final del array.
estudiantes.push("Pedro");
console.log("Se agregó al final: Pedro");

// 2. unshift(): agrega una estudiante al principio del array.
estudiantes.unshift("Valentina");
console.log("Se agregó al principio: Valentina");

// 3. pop(): elimina el último estudiante y lo guarda en una variable.
const estudianteEliminado = estudiantes.pop();
console.log("Se ha eliminado el elemento: " + estudianteEliminado);
// Agregar estudiante a la lista.
const agregarestudiante = pedirNombre("¿Quiere agregar un estudiante? Nombre del estudiante:");
if (agregarestudiante !== null && agregarestudiante.trim() !== "") {
    const nuevoEstudiante = agregarestudiante.trim();
    estudiantes.push(nuevoEstudiante);
    alert(nuevoEstudiante + " fue agregado correctamente.");
    console.log("Lista actualizada:", estudiantes);
} else {
    alert("No se agregó ningún estudiante.");
}


// Pedimos el nombre, como en el Trabajo 3.
let nombre = pedirNombre("¿Cuál es tu nombre?");

// Validamos que el usuario no haya cancelado ni dejado el nombre vacío.
if (nombre === null || nombre.trim() === "") {
    alert("No ingresaste un nombre. Se usará Juan para continuar el ejemplo.");
    nombre = "Juan";
} else {
    nombre = nombre.trim();
}

// 4. includes(): comprobamos si el nombre existe en el array.
if (estudiantes.includes(nombre)) {
    // indexOf(): obtenemos la posición del estudiante (los índices empiezan en 0).
    const posicion = estudiantes.indexOf(nombre);
    console.log("El estudiante " + nombre + " está en el índice " + posicion + ".");

    // Conservamos el ingreso de las dos notas del Trabajo 3.
    const nota1Texto = prompt("Ingresá la primera nota de " + nombre + " (del 1 al 10):");
    const nota2Texto = prompt("Ingresá la segunda nota de " + nombre + " (del 1 al 10):");

    // Convertimos los datos de texto a números.
    const nota1 = Number(nota1Texto);
    const nota2 = Number(nota2Texto);

    // Verificamos que las dos notas sean números válidos entre 1 y 10.
    const notasValidas =
        nota1Texto !== null &&
        nota2Texto !== null &&
        nota1Texto.trim() !== "" &&
        nota2Texto.trim() !== "" &&
        Number.isFinite(nota1) &&
        Number.isFinite(nota2) &&
        nota1 >= 1 && nota1 <= 10 &&
        nota2 >= 1 && nota2 <= 10;

    if (notasValidas) {
        // Usamos la función del Trabajo 3 para calcular el promedio.
        const promedio = calcularPromedio(nota1, nota2);

        // Usamos la función flecha del Trabajo 3 para comprobar si aprobó.
        if (aprobo(promedio)) {
            alert(nombre + ", aprobaste con un promedio de " + promedio);
            console.log(nombre + ", aprobaste con un promedio de " + promedio);
        } else {
            alert(nombre + ", no aprobaste. Tu promedio es " + promedio);
            console.log(nombre + ", no aprobaste. Tu promedio es " + promedio);
        }
    } else {
        alert("Las notas deben ser números entre 1 y 10. Volvé a ejecutar el programa.");
        console.log("No se calculó el promedio porque las notas no eran válidas.");
    }
} else {
    // Si no existe, informamos al usuario.
    alert("El estudiante " + nombre + " no está en la lista.");
    console.log("El estudiante " + nombre + " no está en la lista.");
}

// 5. splice(): reemplaza un elemento en un índice concreto.
// En el índice 2, reemplazamos el nombre que haya por "Camila".
const indiceAModificar = 2;
const nombreAnterior = estudiantes[indiceAModificar];
estudiantes.splice(indiceAModificar, 1, "Camila");
console.log(
    'Se actualizó el índice ' + indiceAModificar +
    ': "' + nombreAnterior + '" fue reemplazado por "Camila".'
);

// 6. Función que recorre el array con for...of y muestra cada estudiante.
function listarEstudiantes(lista) {
    console.log("===== LISTA FINAL DE ESTUDIANTES =====");

    // for...of recorre los valores del array, uno por uno.
    for (const estudiante of lista) {
        console.log("Estudiante: " + estudiante);
    }

    // length indica cuántos elementos tiene el array.
    console.log("Cantidad total de estudiantes: " + lista.length);
}

// Llamamos a la función para mostrar el array actualizado.
listarEstudiantes(estudiantes);
