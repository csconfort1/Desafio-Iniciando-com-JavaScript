/*Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador*/

alert('Hello World!')

/*Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.*/

let number1 = prompt('Digite o primeiro número')
let number2 = prompt('Digite o segundo número')

number1 = Number(number1)
number2 = Number(number2)

const sum = number1 + number2

alert('Soma: ' + sum)

/*Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/

let number = prompt ('Digite Qualquer Coisa que Te direi o Que é')
    
    if (!isNaN(number))
    {
        alert (+number+ '  É um número')
    }
    else
    {
        alert (+number+ '  "Não é um número"')
    }


/*Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/

let caracter = prompt ('Digite Qualquer Coisa que Te direi o Que é')
    
    if (!isNaN(caracter))
    {
        alert (+caracter+ '  Não é uma String')
    }
    else
    {
        alert (+caracter+ '  "É uma String"')
    }

/*Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/

let character = prompt ('Digite Qualquer Coisa que Te direi o Que é')

const a = true;
const b = false;
const c = text;

    if (character === a)
    {
        console.log("É booleano!");
    }
    else
    {
        console.log("Não booleano!");
    }

    if (character === b)
    {
        console.log("É booleano!");
    }
    else
    {
        console.log("Não booleano!");
    }

    if (character === c)
    {
        console.log("Não booleano!");
    }
    else
    {
        console.log("É booleano!");
    }
    
   


/*Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/

let number3 = prompt('Digite o primeiro número')
let number4 = prompt('Digite o segundo número')

number3 = Number(number3)
number4 = Number(number4)

const sub = number1 - number2

alert('Subtração: ' + sub)

/*Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.*/

let number5 = prompt('Digite o primeiro número')
let number6 = prompt('Digite o segundo número')

number5 = Number(number5)
number6 = Number(number6)

const mult = number5 * number6

alert('Multiplicação: ' + mult)

/*Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.*/

let number7 = prompt('Digite o primeiro número')
let number8 = prompt('Digite o segundo número')

number7 = Number(number7)
number8 = Number(number8)

const div = number7 / number8

alert('Divisão: ' + div)

/*Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".*/

let number9 = prompt ('Digite um número')

number9 = Number(number9)

if (number9 % 2 === 0)
{
    alert (number9+'  É um número Par!')
}
else
    alert (number9+'  Não é um número Par!')


/*Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".*/

let number10 = prompt ('Digite um número')

number10 = Number(number10)

if (number10 % 2 === 0)
{
    alert (number10+'  Não é um número Impar!')
}
else
    alert (number10+'  É um número Impar!')