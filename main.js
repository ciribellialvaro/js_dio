function clicou(){
    document.getElementById("Agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://ringabell.com.br/");
    //window.location.href = "https://ringabell.com.br/";
}


function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar";
    //alert("trocar texto");

}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}


function funcaoChange(elemento){
console.log(elemento.value);

}

/*
function soma(n1, n2){
    return n1 + n2;

}

function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
    validar = false
    } 
    return validar;   
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
//alert(soma(5,10));


//var d = new Date();
//alert(d);
//alert(d.getMonth());
//alert(d.getHours());
//alert(d.getMinutes());



/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}


/*
var count = 0;
while (count < 5) {
console.log(count);
//count = count + 1;
//count ++
alert(count ++)
}

/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//console.log(lista[1]);
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse);
//console.log(lista.toString);
//console.log(lista.join(" - "));
//console.log(lista.toString);



//alert(lista[1]);



/*
var nome = "Alvaro Borges";
var idade = 35;
var frase = "Brasil eh o pior time do mundo"
alert(nome + " tem " + idade + " anos.");
console.log(nome);
console.log(idade);
console.log(frase.replace("Brasil","China"));
*/
