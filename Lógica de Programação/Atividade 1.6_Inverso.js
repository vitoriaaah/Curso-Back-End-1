function inversao(valor){
 const tipo=typeof valor //pesquisar oq é typeof
 if(tipo=="boolean")
    return !valor
 else
    if(tipo=="number")
        return -valor
    else
        return`Booleano ou  número esperado, mas o paramêtro é do tipo ${tipo}`
    
 }
 
console.log(inversao(true))
console.log(inversao(5))
console.log(inversao(-2000))