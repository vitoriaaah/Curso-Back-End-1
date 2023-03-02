

function calcularSalario(horasTrabalhadas, totalHora){
    var salario=parseFloat(horasTrabalhadas*totalHora);
    return(`Salário igual a R$${salario}`)
}
do{
var horasTrabalhadas=prompt("Informe as horas trabalhadas no mês: ");
}while(horasTrabalhadas<=0 || !/^[0-9]+$/.test(horasTrabalhadas));

do{
var totalHora=parseFloat(prompt("Informe o valor da hora trabalhada: "));
}while( totalHora<=0 || !/^[0-9]+$/.test(totalHora));

calcularSalario(horasTrabalhadas, totalHora);