/**1. Crie uma variável para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”. 

let idade = Number(prompt('idade do motorista'))

if(idade >= 18){
    document.write('pode dirigir')
}else{
    document.write('nao pode dirigir')
}
*/

/**2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”. 

let idade = Number(prompt('idade do motorista'))
let habilitacao = prompt('tem habilitacao - 1 para sim e 2 para nao')

if(idade >= 18 && habilitacao == 1){
    document.write('pode dirigir')
}else{
    document.write('nao pode dirigir')
}
*/

/**3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. 


let dia = Number(prompt('digite o dia da semana (1 para domingo, 2 para segunda, 3 para terca, 4 para quinta, 5 para sexta e 6 para sabado)'))

if(dia == 1 ){
    document.write('Domingo')
}else if(dia ==2){
    document.write('Segunda')
}else if(dia ==3){
    cdocument.write('Terca')
}else if(dia ==4){
    document.write('quarta')
}else if(dia ==5){
    document.write('quinta')
}else if(dia ==6){
    document.write('sexta')
}else if(dia ==7){
    document.write('sabado')
}else{
    document.write('dia nao reconhecido')
}*/

/**4. Reescreva o exercício 3, utilizando apenas o SWITCH. 

let dia = Number(prompt('digite o dia da semana (1 para domingo, 2 para segunda, 3 para terca, 4 para quinta, 5 para sexta e 6 para sabado)'))

switch(dia){
    case 1:
        document.write('domingo')
        break;
   
    case 2:
        document.write('segunda')
        break;
    
    case 3:
        document.write('terca')
        break;
    
    case 4:
        document.write('quarta')
        break;
    
    case 5:
        document.write('quinta')
        break;
    
    case 6:
        document.write('sexta')
        break;
    
    case 7:
        document.write('sabado')
        break;

    default: document.write('dia nao existe')

}*/

/**5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
os números pares. 
    
let exibePar = ''

for (let i = 1; i <= 10; i++){
    if(i % 2 === 0)
        exibePar += i 
}
console.log(exibePar)*/

/**6. Insira no html 30 ( trinta ) números ímpares. 

let exibeImpar = ''

for (let i = 1; i <= 30; i++){
    if(i % 2 != 0)
        exibeImpar += i + " "
}
document.write(exibeImpar)*/

/**7. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100. 

let soma = 0;
let i = 10;

do {
  soma += i;
  i++;
} while (i <= 100);

document.write(soma);
*/

/**8. Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, insira no html
"ISENTO DE IR";
- caso contrário insira "TRIBUTADO NO IR". 


let salario = parseFloat(prompt('digite seu salrio'))

if(salario < 1903.98){
    document.write("ISENTO DE IR")
}else(
    document.write("TRIBUTADO NO IR")
)

*/

/**9. Informe um valor a uma variável e imprima no console se o número
é primo. 


let saida = "";

function ehPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  for (let j = 2; j <= Math.sqrt(numero); j++) {
    if (numero % j === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i <= 15; i++) {
  if (ehPrimo(i)) {
    saida += i + " ";
  }
}

document.write(saida);*/


/**10. Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7

NAO RESPONDI POIS NAO ENTENDI O ENUNCIADO

*/

/**11. Utilizando Switch, faça um programa que pergunte em que turno
você estuda. Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Mostre um alerta com a mensagem
“Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
conforme o caso.

let turno = prompt('digite seu turno m para matutino, v para vespertino e n para noturno').toLocaleUpperCase()

switch(turno){

    case 'M':
        alert('Bom dia');
        break
    case 'V':
        alert('Boa tarde')
    case 'N':
        alert('Boa noite')
    default: alert('Valor invalido')
} */

/**12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
(&&). 

let idade = Number(prompt('digite sua idade'))

if(idade > 18 && idade < 67){
    alert('pode doar sangue')
}else{
    alert('Nao pode doar sangue')
}*/

/**13. Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado. 

let numero = Number(prompt('digite um numero'))
let cont = ''
for(i = 0; i < numero; i++){
    if(i % 2 != 0 ){
        cont += i + ' '
    }
}

document.write(cont)*/

/**14. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor 


let valor = 3
let soma = 0; 

while (soma < 500) {
  soma += valor * 3; 
}

let ultimo = soma - valor * 3; 
console.log(ultimo);*/


/**15. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C); 


let a = Number(prompt('digite lado a'))
let b = Number(prompt('digite lado b'))
let c = Number(prompt('digite lado c'))

if (a < b + c && b < a + c && c < a + b) {
    document.write('É um triângulo');
    
    if (a === b && b === c) {
      document.write(' do tipo equilátero');
    } else if (a === b || a === c || b === c) {
      document.write(' do tipo isósceles');
    } else {
      document.write(' do tipo escaleno');
    }
  } else {
    document.write('Não é um triângulo');
  }*/


  /** 16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).

let anoAtual =  Number(prompt('digite o ano atual'))
let anoNascimento = Number(prompt('digite seu ano de nascimento'))

if(anoAtual - anoNascimento < 16){
    document.write('nao pode votar')
}else{
    document.write('pode votar')
}*/


/** 17. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.


let eleitores = 100
let brancos = 10
let porcentoBranco = (brancos * eleitores) / 100
let nulos = 25
let porcentoNulo = (nulos * eleitores) / 100
let validos = (eleitores - brancos - nulos)
let porcentoValido = (validos * eleitores ) / 100

if(porcentoBranco + porcentoNulo + porcentoValido == eleitores){
document.write(`% brancos :${porcentoBranco}%<br>`)
document.write(`% nulos :${porcentoNulo}%<br>`)
document.write(`% de votos validos sao :${porcentoValido}`)
}else{
    document.write('contagem errada')
}*/

/**18. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

a vista 2,5 de desconte
de 2 ate 5 preco tabela
de 6 ate 10 juro de 6 %
de 11 ate 15 13%

Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console. 

let preco = 1000.00
let valorParcela = 0
let parcela =10
let desconto = 0
let acrescimo = 0

if(parcela === 0 ){
    desconto = preco * 2.5 / 100
    console.log(`sua compra no valor de ${preco - desconto}`)
}else if(parcela > 1 && parcela < 6){
    console.log(`sua compra no valor de ${preco}`)
}else if(parcela > 5 && parcela < 11){
    acrescimo = preco * 6 / 100
    valorParcela = (preco + acrescimo) / parcela
    console.log`sua compra no valor de ${preco + acrescimo}`
    console.log(`o valor de cada parcela sai em ${valorParcela}`)
}else if(parcela >=11 && parcela < 16){
    acrescimo = preco * 13 / 100
    valorParcela = (preco + acrescimo) / parcela
    console.log`sua compra no valor de ${preco + acrescimo}`
    console.log(`o valor de cada parcela sai em ${valorParcela}`)
}else{
    console.log('nao podemos vender com este prazo')
}*/