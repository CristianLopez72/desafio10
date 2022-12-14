//Importo Librerias a utilizar
import Server from './services/server.js';

const puerto = 8080;

Server.listen(PORT, () => {
    console.log(`Servidor Escuchando en el puerto ${puerto}`);
});