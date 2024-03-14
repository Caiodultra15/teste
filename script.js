////////exercicios 1

let indice = 13;
let soma = 0;
let K = 0;

while (K < indice) {
  K = K + 1;
  soma = soma + K;
}
console.log(soma);

///////////exercicio 2
function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;
  let c;
  while (true) {
    c = a + b;
    if (c === numero) {
      return true;
    } else if (c > numero) {
      return false;
    }
    a = b;
    b = c;
  }
}
const numero = 21;
if (verificaFibonacci(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}

//////////exercicio 3
//sequência a) 1, 3, 5, 7
function completarSequenciaA() {
  const sequencia = [1, 3, 5, 7];
  const proximo = sequencia[sequencia.length - 1] + 2;
  return proximo;
}

//sequência b) 2, 4, 8, 16, 32, 64
function completarSequenciaB() {
  const sequencia = [2, 4, 8, 16, 32, 64];
  const proximo = sequencia[sequencia.length - 1] * 2;
  return proximo;
}

//sequência c) 0, 1, 4, 9, 16, 25, 36
function completarSequenciaC() {
  const sequencia = [0, 1, 4, 9, 16, 25, 36];
  const proximo = Math.pow(sequencia.length, 2);
  return proximo;
}

//sequência d) 4, 16, 36, 64
function completarSequenciaD() {
  const sequencia = [4, 16, 36, 64];
  const proximo = Math.pow((sequencia.length + 1) * 2, 2);
  return proximo;
}

//sequência e) 1, 1, 2, 3, 5, 8
function completarSequenciaE() {
  const sequencia = [1, 1, 2, 3, 5, 8];
  const proximo =
    sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
  return proximo;
}

//sequência f) 2, 10, 12, 16, 17, 18, 19
function completarSequenciaF() {
  const sequencia = [2, 10, 12, 16, 17, 18, 19];
  const proximo = sequencia[sequencia.length - 1] + 1;
  return proximo;
}

console.log("a) Próximo elemento:", completarSequenciaA());
console.log("b) Próximo elemento:", completarSequenciaB());
console.log("c) Próximo elemento:", completarSequenciaC());
console.log("d) Próximo elemento:", completarSequenciaD());
console.log("e) Próximo elemento:", completarSequenciaE());
console.log("f) Próximo elemento:", completarSequenciaF());

//////////exercicio 4
function descobrirInterruptores() {
  let lâmpada1 = ligarInterruptor(1);
  esperarAlgunsMinutos();
  desligarInterruptor(1);
  ligarInterruptor(2);

  let lâmpada2 = verificarLâmpada();

  let interruptor1, interruptor2, interruptor3;
  if (lâmpada1) {
    interruptor1 = "Controla a Lâmpada 1";
    interruptor2 = "Controla a Lâmpada 2";
    interruptor3 = "Controla a Lâmpada 3";
  } else if (lâmpada2) {
    interruptor1 = "Controla a Lâmpada 3";
    interruptor2 = "Controla a Lâmpada 1";
    interruptor3 = "Controla a Lâmpada 2";
  } else {
    interruptor1 = "Controla a Lâmpada 2";
    interruptor2 = "Controla a Lâmpada 3";
    interruptor3 = "Controla a Lâmpada 1";
  }
  return {
    "Interruptor 1": interruptor1,
    "Interruptor 2": interruptor2,
    "Interruptor 3": interruptor3,
  };
}
function ligarInterruptor(numero) {
  console.log("Interruptor " + numero + " ligado.");
  return true;
}

function desligarInterruptor(numero) {
  console.log("Interruptor " + numero + " desligado.");
}

function esperarAlgunsMinutos() {
  console.log("Esperando alguns minutos...");
}

function verificarLâmpada() {
  let lâmpadaAcesa = Math.random() < 0.5;
  console.log("Lâmpada está " + (lâmpadaAcesa ? "acesa" : "apagada") + ".");
  return lâmpadaAcesa;
}

let resultados = descobrirInterruptores();
console.log("\nResultados:");
for (let interruptor in resultados) {
  console.log(interruptor + ": " + resultados[interruptor]);
}

////////////exercicio 5
function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}
let minhaString = "Olá, mundo!";
let stringInvertida = inverterString(minhaString);
console.log("String original", minhaString);
console.log("String invertida", stringInvertida);
