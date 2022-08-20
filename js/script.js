// seleções

const inputText = document.querySelector('#input-text');
const btnCriptografar = document.querySelector('#btn-criptor');
const btnDesencriptar = document.querySelector('#btn-descriptor');
const mensagem = document.querySelector('#mensagem');
const btnCopiar = document.querySelector('#copiar');

//captura a classe e esconde a rectangleTwo da tela
document.querySelector('.rectangleTwo').style.display = 'none';
inputVerificar();

// caputura o id no momento do click e direciona para o metódo que encripta o texto
document.getElementById('btn-criptor').onclick = e => {
  const textoEncriptado = encriptar(inputText.value.toLowerCase());
  mensagem.value = textoEncriptado;
  inputText.value = '';
  aparece();
};

// caputura o id no momento do click e direciona para o metódo que desencripta o texto
document.getElementById('btn-descriptor').onclick = e => {
  const textoDecriptado = decodificar(inputText.value);
  mensagem.value = textoDecriptado;
  inputText.value = '';
  aparece();
};

// captura o id no momento do click e copia a menssagem
document.getElementById('copiar').onclick = e => {
  const mensagem = document.querySelector('#mensagem');
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value);
  mensagem.value = '';
};

//encriptarText
function encriptar(stringEncriptada) {
  let encriptorCode = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();
  for (let i = 0; i < encriptorCode.length; i++) {
    if (stringEncriptada.includes(encriptorCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        encriptorCode[i][0],
        encriptorCode[i][1]
      );
    }
  }

  return stringEncriptada;
}

//decodificaText
function decodificar(stringDecriptada) {
  let descriptorCode = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringDecriptada = stringDecriptada.toLowerCase();
  for (let i = 0; i < descriptorCode.length; i++) {
    if (stringDecriptada.includes(descriptorCode[i][1])) {
      stringDecriptada = stringDecriptada.replaceAll(
        descriptorCode[i][1],
        descriptorCode[i][0]
      );
    }
  }
  return stringDecriptada;
}
// verificando qual o texto digitado pelo usuário
function inputVerificar() {
  let inputPalavra = document.querySelector('#input-text');
  inputPalavra.addEventListener('keypress', function (event) {
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if (keyCode > 47 && keyCode < 65) {
      event.preventDefault();
    }
  });
}

//funções de manipulação dom
function home() {
  document.querySelector('.rectangleOne').style.display = 'block';
  document.querySelector('.rectangleTwo').style.display = 'none';
}

function aparece() {
  document.querySelector('.rectangleTwo').style.display = 'flex';
  document.querySelector('.rectangleOne').style.display = 'none';
}
