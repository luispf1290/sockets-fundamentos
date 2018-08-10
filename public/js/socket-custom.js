var socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function(){
    console.log('Perdimos la conexion');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario:'luis',
    mensaje: 'Que onda!'
},function(resp){
    console.log('Respuesta server', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(respuesta){
    console.log(respuesta);

});