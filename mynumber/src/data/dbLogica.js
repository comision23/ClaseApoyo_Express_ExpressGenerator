const fs = require('fs')
const path = require('path')

const leerArchivo = (parametro)=>{
    let filePath = path.join(__dirname,'../data',parametro+'.json')
    let numbers = JSON.parse(fs.readFileSync(filePath,'utf-8'))
    return numbers
}


module.exports = { leerArchivo }