
const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Uusario conectado');


    client.emit('enviarMensaje', {
        usuario:'Administrador',
        mensaje:'Bienvenido a mi app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /* if( mensaje.usuario){
           callback({
               resp: 'TODO BIEN'
           });
        }else{
           callback({
               resp:'TODO MAL'
           }); 
        }*/
    });
});