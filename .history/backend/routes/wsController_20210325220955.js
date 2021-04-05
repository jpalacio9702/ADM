const express = require( 'express' );
const router  = express.Router();

const wsClient = require( '../services/wsClient' );

router.get( '/listadoVehiculos', async( req, res ) => {
    const autos = await Auto.find();
    res.send( autos );
});

const listadoVehiculos = (req, res) => {
    // Encriptación de la contraseña
    console.log(req.body)
    req.body.password = bcrypt.hashSync(req.body.password)
  
    const newClient = new Client(req.body)
    newClient.save((error, clientSaved) => {
      if (error) {
        res.status(422).send(error)
      } else {
        // Pasos necesarios para no devolver el campo password
        let client = clientSaved.toObject()
        delete client.password
  
        res.status(201).send(client)
      }
    })
  }

  module.exports = { authClient, createClient, deleteClient, getClient, getClients, updateClient }