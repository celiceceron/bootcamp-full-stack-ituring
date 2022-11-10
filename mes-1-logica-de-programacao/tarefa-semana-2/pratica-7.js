/* Função recebe uma string como parâmetro
representando um idioma (ex: "es" para espanhol, 
"pt" para português", "en" para inglês).
Exiba na tela "Hello World!" em diferentes idiomas, 
para pelo menos 3 idiomas se nenhum idioma for informado, 
exiba "Olá, Mundo!" por padrão.
*/

const identifiqueOIdioma = (idioma) => {
    if (idioma === "es"){
        console.log("Espanhol");
    } else if (idioma === "pt") {
        console.log ("Português");
    } else if (idioma === "en"){
        console.log("Inglês");
    } else {
        console.log("Hello World!");
      }
    }

    identifiqueOIdioma("es");
    identifiqueOIdioma("pt");
    identifiqueOIdioma("en");
    identifiqueOIdioma("fr");