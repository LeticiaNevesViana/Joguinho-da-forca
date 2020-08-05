let word = ["goto", "algoritmo", "array", "while","for", "ifelse", "compilador", "booleana"];
let currentword= [];
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function start() {
  var aleatorio = Math.floor(Math.random() * word.length);

  answer = word[aleatorio];

  var dica;

  currentword.push(answer.split(""))


      if (aleatorio == 0 ) {
        dica= 'O comando que tem a função de implementar desvios incondicionais no programa, mas que é de uso proibido na programação estruturada.';
      }
      if (aleatorio == 1) {
        dica= 'Sequência de passos para se executar uma função.';
      }
      if (aleatorio== 2) {
        dica = 'estrutura de dados que armazena uma coleção de elementos';
      }
      if (aleatorio== 3) {
        dica = 'Utilizada para  repetir um mesmo processamento até que a condição seja verdadeira.';
      }
      if (aleatorio== 4) {
       dica=  'Utilizado para executar um conjunto de comandos executado por um número X de vezes.';
      }
      if (aleatorio == 5) {
        dica= 'Utilizado para expressar condição';
      }
    
      if (aleatorio == 6) {
        dica= 'Utilizado para traduzir os programas escritos pelo programador';
      }

      if (aleatorio == 7) {
        dica='Representa verdadeiro ou falso';
      }
     
      document.getElementById('dica').innerHTML = dica;
}

function gerarAlfabeto() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="button"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    checkIfGameLost();
    updateLogica();
  }
}

function updateLogica() {
  document.getElementById('r'+mistakes).innerHTML = '<h1 style="color:crimson">X</h1>';
}

function checkIfGameWon() {
  if (wordStatus === answer.split('').join(' ')) {
    document.getElementById('keyboard').innerHTML = '<span style="color:darkgreen;font-size:20px;margin-bottom:10px">Parabéns continue aprendendo!!! &#128515;</span>';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('palavra').innerHTML = '<span style="font-size:30px;text-transform:none">A resposta era: ' + answer+'</span>';
    document.getElementById('keyboard').innerHTML = '<span style="color:crimson;font-size:20px;margin-bottom:10px">Ah não deu mas não desista continue estudando &#128515;</span>';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join(' ');

  document.getElementById('palavra').innerHTML = wordStatus;
}



function reset() {
  mistakes = 0;
  guessed = [];

  start();
  guessedWord();
  gerarAlfabeto();
  document.getElementById('r1').innerHTML = 'L';
  document.getElementById('r2').innerHTML = 'Ó';
  document.getElementById('r3').innerHTML = 'G';
  document.getElementById('r4').innerHTML = 'I';
  document.getElementById('r5').innerHTML = 'C';
  document.getElementById('r6').innerHTML = 'A';
}


start();
gerarAlfabeto();
guessedWord();