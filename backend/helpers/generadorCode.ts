function generarCodigoDeValidacion() {
    // Generar un número aleatorio entre 0 y 9999
    let codigo : string | number = Math.floor(Math.random() * 10000);

    // Asegurarse de que el código tenga 4 dígitos añadiendo ceros al inicio si es necesario
    codigo = codigo.toString().padStart(4, '0');

    return codigo;
}

export default generarCodigoDeValidacion