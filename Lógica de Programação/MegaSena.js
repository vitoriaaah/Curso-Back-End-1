let numMegaSena=[]
let gabarito=[10,20,56,4,7,16]
let resultado=[]
var k=0,cont=0;

function sorteia() {
  return Math.round(Math.random() * 60)
}
function numeroEscolhido(num){
    do{
    var num= prompt ("Informe o numero: ")
    numMegaSena.push(num)
    return num
    }while(num<=0 || num>60 && /^[0-9]+$/.test(num))
}
var resp= prompt("Digite S para numero sorteado ou E para numero escolhido")
if(resp.toUpperCase()=='S'){
  for (let index = 0; index < 6; index++) {
    numMegaSena[index]=sorteia()
    console.log(numMegaSena[index])     
  }
}else if( resp.toUpperCase()=='E'){
  for (let index = 0; index < 6; index++) {
    numMegaSena[index]=numeroEscolhido()
    console.log(numMegaSena[index])     
  }
}
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
   if(numMegaSena[i]==gabarito[j]){
      resultado[k++]=numMegaSena[i]
      cont=cont+1
   }
  }
}
console.log(`${cont} acertos!`)
for (let i = 0; i < k; i++) {
  console.log(resultado[i])
}