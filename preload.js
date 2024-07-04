const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => {
        // canais válidos
        let canaisValidos = ['abrir-link-secundaria', 'fechar-janela-secundaria'];
        // verificação dos canais válidos
        if (canaisValidos.includes(channel)) {
            ipcRenderer.send(channel, data)
        }
    } 
})