
const numbers = [
    {
        id: 1,
        nombre: 'Número_Cero',
        valor: 0,
        imagen: 'cero.png'
    },
    {
        id: 2,
        nombre: 'Número_Uno',
        valor: 1,
        imagen: 'uno.png'
    },
    {
        id: 3,
        nombre: 'Número_Dos',
        valor: 2,
        imagen: 'dos.png'
    },
    {
        id: 4,
        nombre: 'Número_Tres',
        valor: 3,
        imagen: 'tres.png'
    },
    {
        id: 5,
        nombre: 'Número_Cuatro',
        valor: 4,
        imagen: 'cuatro.png'
    },
    {
        id: 6,
        nombre: 'Número_Cinco',
        valor: 5,
        imagen: 'cinco.png'
    },
    {
        id: 7,
        nombre: 'Número_Seis',
        valor: 6,
        imagen: 'seis.png'
    },
]



const controladorIndex = {
    
    index : (req, res) => {
        res.render('home', { 
            title: 'Numeros', 
            titulo: 'ESTOS SON NUMEROS',
            numbers
      })

}}

module.exports = controladorIndex




/*
module.exports = {

    index : (req,res)=>{

    }

}
*/