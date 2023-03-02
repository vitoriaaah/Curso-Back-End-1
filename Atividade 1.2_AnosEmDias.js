
function converterIdadeEmAnosParaDias(anos){
    idadeEmDias= anos*365;
    return(idadeEmDias);
}

do{
var anos=parseInt(prompt("Informe sua idade: "));
if(anos<=0 || !/^[0-9]+$/.test(anos)){
    alert("Erro.\nTente Novamente!");
}
}while(anos<=0 && anos=="" || !/^[0-9]+$/.test(anos));

alert(`Idade em anos: ${anos} \nIdade em dias: ${converterIdadeEmAnosParaDias(anos)} dias`);