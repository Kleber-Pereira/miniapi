const express = require("express");
const app = express();

app.get("/aluno", (req, res )=> {
    let usuario = {
                    nome: "Kleber Gonçalves Pereira",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    }
    res.send(usuario)
}) ;

app.get("/professores", (req, res )=> {
    let professores  = [ {
                    nome: "David Reis",
                    disciplina : "JAVA",
                    curso : "ADS"
    },
    {
        nome: "Alexandre Oliveira Garcia ",
        disciplina : "POO",
        curso : "ADS"
}]
    res.send(professores);
}) ;


app.listen(3000, () => {
    console.log("funfando...");
})
