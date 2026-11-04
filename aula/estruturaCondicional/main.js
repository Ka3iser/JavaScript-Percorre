/* alert("Seja Bem vindo a melhor aula da sua vida!"); */

/* 
Estrutura Condicional

uma estrutura condional permite que o programa tome decições.
ela verifica se uma condição é verdadeura ou falsa e executa um codigo
de acordo com o resultado
*/

// verificando idade

// let idade = Number(prompt("Quantos anos você tem?"));

/* if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade")
} */

/* if("Henrique" !== "henrique"){
    alert("1");
}else{
    alert("2")
} */

    /* console.log("a" == "A")
    console.log("5" === 5)
    console.log( 5 > 10)
    console.log( 10 < 5)
    console.log( 2 != 4) */

/* let media = Number(prompt("Digite sua média"));

if(media >= 7.0){
    alert("Passou");
}else if(media >= 6){
    alert("passou por pouco hein"); 
}else{
    alert("Reprovado filho esqueça tudo");
} */

// sistema de acesso

/* let usuario = prompt("Digite seu nome de usuario");

let senha = prompt("Digite sua senha");

let senhaSecreta = "Bobao123@";

if (usuario === "admin" && senha === senhaSecreta){
    alert("Bem vindo");
}else{
    alert("Usuario ou Senha incorreta!!");
} */

console.log(10 > 5 && 10 > 11); //false
console.log(10 < 5 || 6 > 5); //true
console.log(90 >= 5 && 7 <= 8); //true
console.log(5 <= 4 || 7 >= 5); // true

let numero = Number(prompt("adivinhe o numero escolhido de 0 a 20"));

if (numero === 9) {
    alert("Parabéns");
}else{
    alert("vai bobo, vai paiaço");
}