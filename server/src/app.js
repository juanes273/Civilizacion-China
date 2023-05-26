import expres from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import router from "../src/routes/proyecto.js"
import cors from "cors"

//App root
const app = expres();

//Connection database
mongoose.connect('mongodb+srv://brandjuan:nDV1dZYmQCH7bbq4@civilizacion-china.p8tyooj.mongodb.net/CivilizacionesDB')
    .then(()=>{
        console.log('Conectado a la base de datos')
    })

//Config
app.set('PORT', 5000)

//Middleware
app.use(morgan('dev'))
app.use(expres.json())
app.use(cors());

//Routes
app.use('/api/', router)

//On server
app.listen(app.get('PORT'), ()=>{
    console.log('Server port ' + app.get('PORT'))
})