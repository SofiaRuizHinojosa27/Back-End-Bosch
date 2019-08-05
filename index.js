const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001

mongoose.connect('mongodb+srv://fundacion:bosch@cluster0-ax7t2.mongodb.net/test?retryWrites=true&w=majority', (err,res) => {
    if(err) {
        return console.log('error al conectar a la base de datos')
    }
    console.log('Conexion base de datos establecida...')
})


app.listen( port, () => {
    console.log(`API REST corriendo desde localhost:${port}`)
})

