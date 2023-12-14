const fs = require('fs')
const path = require('path')

const leerArchivo = (nameFile)=>{
    let filePath = path.join(__dirname,'../data',nameFile+'.json')
    let numbers = JSON.parse(fs.readFileSync(filePath,'utf-8'))
    return numbers
}

const guardarArchivo = (newArray,nameFile)=>{
    const pathFile = path.join(__dirname,'../data',nameFile+'.json')
    let datoJson = JSON.stringify(newArray)
    fs.writeFileSync(pathFile,datoJson,'utf-8')
}


module.exports = { leerArchivo, guardarArchivo }