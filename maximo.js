const numeros = [3, 7, 2, 9, 1,8, 4, 6, 8, 5];

function findMax() {
    const max = findMaxR(numeros);
    document.getElementById('resultado').textContent = `El número máximo es: ${max}`;
}

function findMaxR(arr, inicio = 0, fin = arr.length - 1) {
    if (inicio == fin) {
        return arr[inicio];
    }

    const medio = Math.floor((inicio + fin) / 2);
    
    const maxIzq = findMaxR(arr, inicio, medio);
    const maxDer = findMaxR(arr, medio + 1, fin);

    return maxIzq > maxDer ? maxIzq : maxDer;
}