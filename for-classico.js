const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressaõ: executada apenas uma vez
//esgunda expressão: condiÇão de execução
//terceira expressão: executada se,pre ao final do bloco

for  (let indice = 0; indice < notas.length; indice++){
    console.log(`nota ${indice + 1}: ${notas[indice]}`);
}