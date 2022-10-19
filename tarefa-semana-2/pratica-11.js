/* 
Criar uma função que recebe uma cor escrita em texto 
como parâmetro e retorna o valor no formato RGB.

vermelha"->"rgb(255,0,0)"
"laranja"->"rgb(255,128,0)"
"amarela"->"rgb(255,255,0)"
"verde"->"rgb(,255,)"
"azul claro"->"rgb(0,255,255)"
"azul marinho"->"rgb(0,0,255)"
"rosa"->"rgb(255,0,255)"
 "outras"->"rgb(255,255,255)".

*/

const identificaAsCores = (cor) => {
    switch (cor) {
        case "vermelha":
            return("rgb(255,0,0)");
            break;
        case "laranja":
            return "rgb(255,128,0)";
            break;
        case "amarela":
            return "rgb(,255,)";
            break;
        case "verde":
            return "rgb(,255,)";
            break;
        case "azul claro":
            return "rgb(0,255,255)";
            break;
        case "azul marinho":
            return "rgb(0,0,255)";
            break;
        case "rosa":
            return "rgb(255,0,255)";
            break;
        default:
            return "rgb(255,255,255)";
    }
}
console.log(identificaAsCores("vermelha"));
console.log(identificaAsCores("verde"));
console.log(identificaAsCores("amarela"));
console.log(identificaAsCores("laranja"));
console.log(identificaAsCores("branca"));