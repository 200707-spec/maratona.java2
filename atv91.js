/** Escreva uma função recursiva para calcular o fatorial de um
número */

function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // Exemplo
