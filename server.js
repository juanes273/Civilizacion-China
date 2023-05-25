const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Civilizaciones', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.log('Error al conectar a MongoDB:', err));

// Definición de un modelo de usuario en MongoDB
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Middleware de CORS
app.use(cors());

const bodyParser = require('body-parser');

// Middleware para analizar el cuerpo de la solicitud JSON
app.use(bodyParser.json());

// Ruta para obtener los usuarios
app.get('/users', async (req, res) => {
  try {
    // Obtener todos los usuarios de la colección
    const users = await User.find();

    // Devolver los usuarios como respuesta
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Datos de inicio de sesión:', email, password);
  
    // Resto del código para la autenticación
  
    User.findOne({ email, password })
      .then(user => {
        if (!user) {
          console.log('Error de autenticación: Credenciales inválidas');
          return res.status(401).json({ message: 'Credenciales inválidas' });
        }
  
        console.log('Inicio de sesión exitoso para el usuario:', user);
        res.json({ message: 'Que rico te mueves majin boo' });
      })
      .catch(error => {
        console.log('Error de autenticación:', error);
        res.status(500).json({ message: 'Error de autenticación' });
      });
  });  
  

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
