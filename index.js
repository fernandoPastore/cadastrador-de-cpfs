const CPF = require('cpf');
// fs é uma Biblioteca nativa do Node.js onde nela existe diversas funções já utilizáveis 
const fs = require('fs');
fs.writeFileSync

//imprime uma mensagem de boas vindas   
console.log("Seja bem vindo ao cadastrador de CPFs");

//3 - Capturar o CPF Digitado pelo usuário
let cpf = process.argv[2]
     

//2 - Validar o CPF...
let cpfValido = CPF.isValid(cpf)    

//3 - Caso a informação seja um CPF válido, salvar no arquivo dados.txt
//        caso contrário, exibir mensagem de erro:
if(cpfValido){
    console.log('CPF Válido! Salvando.')
    fs.writeFileSync('dados.txt','cpf:' + cpf + "\n", {flag:'a'});
} else {
    console.log('CPF Inválido, por gentileza digitar um CPF válido')
}
console.log('Fim');