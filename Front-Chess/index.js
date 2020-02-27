const express = require('express')
const path = require('path')
const editJsonFile = require('edit-json-file');
const PORT = process.env.PORT || 5000

let file = editJsonFile(`./tab.json`);
let tab = require('./indiceTab.json')

function changePieces(column,house,endcolumn,endhouse) {
   
    if(tab["tab"][column][parseInt(house)]){
        var aux =  file.get(tab["tab"][column][parseInt(house)])
        var temp = file.get(tab["tab"][endcolumn][parseInt(endhouse)])
        // duas variaveis para fazer a troca das possições no json
        return 
    }

    // if (req[0] == "A") {
    //     file.set("1",{pieces: "fas fa-chess-rook", color: "#DF7401"});
    //     file.save()
    //     return "salvo!" + house
    // }
}

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set("json spaces", 4)
    .get('/initcolumn=:column&inithouse:house',
     (req, res) => res.send(changePieces(req.params.column,req.params.house)))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
    