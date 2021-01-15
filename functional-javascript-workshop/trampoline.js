function repeat(operation, num) {
    if (num <= 0) {
        return;
    }

    operation();

    return () => repeat(operation, num - 1);
}

function trampoline(fn) {
    let next = fn();

    while (next) {
        next = next();
    }
}

module.exports = function (operation, num) {
    return trampoline(() => repeat(operation, num));
};

//explicación: debido a la naturaleza de la recursión, darle números grandes implica que en memoria mantendrá las variables hasta que termine la recursión, lo que eventualmente
//genera un stackoverflow (memoria excedida). Pero, usando la propiedad local de funciones, se puede retornar una función que se ejecuta en un "trampolín", el cuál ejecutará
//la función, recibirá otra si aún no termina la ejecución y no acumulará en memoria las variables de dichas funciones porque cada uno termina su ciclo de vida.