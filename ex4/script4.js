function media() {
let nota1= number (window.prompt("digite a primeira nota"));
let nota2= number (window.prompt("digite a segunda nota"));
let nota3= number (window.prompt("digite a primeira nota"));

let media =( nota1+nota2+nota) /3;

let resultado = document.quarySelector('#resultado');
resultado.innerHTML = '<p>o resultado é $(media)</p>';

console.log(resultado);

}

if (media <6) {

    let med =6 -media
    resultado.innerHTML= '<p> reprovado </p>
}

