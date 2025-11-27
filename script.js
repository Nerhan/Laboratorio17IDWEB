console.log("=== EJERCICIO 3 ===");
try {
    let variableNoExiste;
    console.log(variableNoExiste.propiedad);
} catch (error) {
    console.log("Error capturado:", error.message);
}


console.log("=== EJERCICIO 4 ===");
try {
    const jsonMalFormado = "{nombre: 'Pedro'}";
    JSON.parse(jsonMalFormado);
} catch (e) {
    console.log("Nombre del error:", e.name);
    console.log("Mensaje:", e.message);
}


console.log("=== EJERCICIO 5 ===");
try {
    console.logg("Esto va a fallar");
} catch (error) {
    console.log("falló");
} finally {
    console.log("siempre se ejecuta");
}


console.log("=== EJERCICIO 6 ===");
function validarEdad(edad) {
    if (typeof edad !== "number" || edad < 0) {
        throw new Error("Edad inválida");
    }
    console.log("Edad válida:", edad);
}

try { validarEdad(-10); } catch (e) { console.log("Error:", e.message); }
try { validarEdad("veinte"); } catch (e) { console.log("Error:", e.message); }
try { validarEdad(25); } catch (e) { console.log(e.message); }


console.log("=== EJERCICIO 7 ===");
try {
    let obj = null;
    obj.nombre.toUpperCase();
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError detectado:", error.message);
    } else {
        console.log("Otro tipo de error");
    }
}


console.log("=== EJERCICIO 8 ===");
function nivel2() {
    console.log(x);
}

function nivel1() {
    try {
        nivel2();
    } catch (e) {
        console.log("Nivel 2 atrapó el error:", e.message);
        throw e;
    }
}

try {
    nivel1();
} catch (e) {
    console.log("Nivel 1 recibió el error:", e.message);
    console.log("ERROR FINAL capturado en el nivel superior:", e.message);
}


console.log("=== EJERCICIO 9 ===");
function cargarMensaje(callback) {
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}

cargarMensaje((msg) => console.log(msg));


console.log("=== EJERCICIO 10 ===");
function cargarUsuario(callback) {
    const tiempoAleatorio = Math.floor(Math.random() * 701) + 800;
    setTimeout(() => {
        const usuario = { id: 1, nombre: "Juancito" };
        callback(usuario);
    }, tiempoAleatorio);
}

cargarUsuario((user) => {
    console.log(`Usuario cargado: ${user.nombre} (ID: ${user.id})`);
});


console.log("=== EJERCICIO 11 ===");
function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
}


dividirAsync(20, 4, (err, resultado) => {
    if (err) console.log("Error:", err.message);
    else console.log("Resultado:", resultado);
});

dividirAsync(10, 0, (err, resultado) => {
    if (err) console.log("Error:", err.message);
    else console.log("Resultado:", resultado);
});
