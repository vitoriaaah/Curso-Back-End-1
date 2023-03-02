


function mesEmString(){
   return(nomeMes);
}

do{
var numeroMes=parseInt(prompt("Informe o numero do mes: "));
}while(numeroMes<=0 && numeroMes>12);

switch (numeroMes) {
    case 1:
        var nomeMes="Janeiro";
        break;
    case 2:
        nomeMes="Fevereiro";
        break;
    case 3:
        nomeMes="Marco";
        break;
    case 4: 
        nomeMes="Abril";
        break;
    case 5:
        nomeMes="Maio";
        break;
    case 6:
        nomeMes="Junho";
        break;
    case 7:
        nomeMes="Julho";
        break;
    case 8:
        nomeMes="Agosto";
        break;
    case 9:
        nomeMes="Setembro";
        break;
    case 10:
        nomeMes="Outubro";
        break;
    case 11:
        nomeMes="Novembro";
        break;
    case 12:
        nomeMes="Dezembro";
        break;
    default:
        alert("Opcao invalida!");
        break;
}
mesEmString(numeroMes);