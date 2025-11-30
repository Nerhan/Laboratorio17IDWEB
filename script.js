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

console.log("\n=== EJERCICIO 12 ===");
function procesarLista(arr, callbackFinal) {
    if (arr.length === 0) {
        callbackFinal("Proceso completado");
        return;
    }

    let indice = 0;

    function procesarSiguiente() {
        if (indice >= arr.length) {
            callbackFinal("Proceso completado");
            return;
        }

        console.log(`Procesando ... ${arr[indice]}`);
        const tiempo = Math.floor(Math.random() * 1001) + 500; // 500-1500 ms

        setTimeout(() => {
            indice++;
            procesarSiguiente();
        }, tiempo);
    }

    procesarSiguiente();
}

procesarLista([1, 2, 3, 4, 5], (msg) => console.log(msg));

console.log("\n=== EJERCICIO 13 (promesas) ===");
function cargarMensajePromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Mensaje cargado Ejercicio13y17"), 1000);
    });
}

cargarMensajePromise().then(msg => console.log(msg));

console.log("\n=== EJERCICIO 14 (promesas) ===");
function cargarUsuarioPromise() {
    const tiempo = Math.floor(Math.random() * 701) + 800;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: "Juancito" });
        }, tiempo);
    });
}

cargarUsuarioPromise()
    .then(user => console.log(`Usuario cargado: ${user.nombre} (ID: ${user.id})`));

console.log("\n=== EJERCICIO 15 (promesas) ===");
function dividirAsyncPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}

dividirAsyncPromise(20, 4)
    .then(result => console.log("Resultado:", result))
    .catch(err => console.log("Error:", err.message));

dividirAsyncPromise(10, 0)
    .then(result => console.log("Resultado:", result))
    .catch(err => console.log("Error:", err.message));

console.log("\n=== EJERCICIO 16 (promesas) ===");
function procesarListaPromise(arr) {
    const promesas = arr.map(numero => {
        return new Promise(resolve => {
            console.log(`Procesando ... ${numero}`);
            const tiempo = Math.floor(Math.random() * 1001) + 500;
            setTimeout(() => resolve(), tiempo);
        });
    });

    return Promise.all(promesas).then(() => "Proceso completado");
}

procesarListaPromise([10, 20, 30, 40])
    .then(msg => console.log(msg));

console.log("\n=== EJERCICIO 17 (async/await) ===");
async function mostrarMensaje() {
    const msg = await cargarMensajePromise();
    console.log(msg);
}
mostrarMensaje();


console.log("\n=== EJERCICIO 18 (async/await) ===");
async function mostrarUsuario() {
    const user = await cargarUsuarioPromise();
    console.log(`Usuario cargado: ${user.nombre} (ID: ${user.id})`+` Ejercicio18`);
}
mostrarUsuario();


console.log("\n=== EJERCICIO 19 (async/await) ===");
async function dividirSeguro(a, b) {
    try {
        const resultado = await dividirAsyncPromise(a, b);
        console.log("Resultado:", resultado+" Ejercicio19");
    } catch (err) {
        console.log("Error:", err.message+" Ejercicio19");
    }
}
dividirSeguro(15, 3);
dividirSeguro(8, 0);


console.log("\n=== EJERCICIO 20 (async/await) ===");
async function procesarListaAsync(arr) {
    for (const numero of arr) {
        await new Promise(resolve => {
            console.log(`Procesando ... ${numero}`+`Ejercicio20`);
            const tiempo = Math.floor(Math.random() * 1001) + 500;
            setTimeout(resolve, tiempo);
        });
    }
    console.log("Proceso completado-Ejercicio 20");
}
procesarListaAsync([100, 200, 300, 400, 500]);