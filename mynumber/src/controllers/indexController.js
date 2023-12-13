
const {leerArchivo} = require('../data/dbLogica')

const fs = require('fs')
const path = require('path')

const controladorIndex = {
    
    listar : (req, res) => {
        numbers = leerArchivo('numeros');
        res.render('home', { 
            title: 'Numeros', 
            titulo: 'ESTOS SON NUMEROS',
            numbers
      })

    },

    verNumero: (req,res)=>{
        let id = req.params.id
        console.log(id)
        numbers = leerArchivo('numeros')
        number = numbers[id-1]
        console.log(numbers[id-1].id)
        res.render('index',{
            title:'El titulo',
            number
        })
    }


    

}

module.exports = controladorIndex




/*
module.exports = {

    index : (req,res)=>{

    }

}
*/