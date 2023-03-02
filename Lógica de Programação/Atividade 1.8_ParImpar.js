
function parOuImpar(num, par=false){
     return num % 2 ? 'Impar' : 'Par';
}
do{
var num= prompt("Informe o valor: ");
}while(!/^[0-9]+$/.test(num));

console.log(`Par(true)\nImpar(false)\nResultado: ${parOuImpar(num)}`);

