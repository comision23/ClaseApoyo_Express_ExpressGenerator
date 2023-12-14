
const {leerArchivo,guardarArchivo} = require('../data/dbLogica')




const controladorIndex = {
    
    listar : (req, res) => {
        numbers = leerArchivo('numeros');
        res.render('home', { 
            title: 'Numeros', 
            titulo: 'ESTOS SON NUMEROS',
            numbers
      })
    },

    detail: (req,res)=>{
        let id = req.params.id
        console.log(id)
        numbers = leerArchivo('numeros')
        number = numbers[id-1]
        console.log(numbers[id-1].id)
        res.render('detail',{
            title:'El titulo',
            number
        })
    },

    vistaCrear : (req,res)=>{
        res.render('crear',{title:'Crear'})
    },

    crear : (req,res)=>{
        
        const archivoJson = leerArchivo('numeros')
        
        console.log(archivoJson[archivoJson.length-1].id)

        let id =archivoJson[archivoJson.length-1].id + 1
        const {nombre,valor,imagen,tipo} = req.body
        let newObj = {
            id,
            nombre,
            valor,
            imagen,
            tipo
        }

        let newArchivo = [...archivoJson,newObj]
        guardarArchivo(newArchivo,'numeros')
        res.send(newArchivo)

    },


    vistaEditar : (req,res)=>{
        let {id} = req.params
        let archivoJson = leerArchivo('numeros')

        const numeroEdit = archivoJson.find(numero => numero.id == id )

        console.log(numeroEdit)


        res.render('editar',{
            title:'Editar',
            numeroEdit
        })

    },

    edit : (req,res) =>{
        res.send(req.body)
        // QUE LOGICA SE APLICA
    }, 





    guardar : (req,res)=>{
        
        
        let archivo = leerArchivo('numeros')
        let newDato = {
            id: 12,
            nombre: "Número_Uno",
            valor: 1,
            imagen: "uno.png",
            tipo : "impar"
        }        
        
        let newArchivo = [...archivo,newDato]
        
        guardarArchivo(newArchivo,'numeros');


        res.send(newArchivo)

        



    },

    


    

}

module.exports = controladorIndex




/*
module.exports = {

    index : (req,res)=>{

    }

}
*/