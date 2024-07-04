const { app, BrowserWindow, nativeTheme, Menu, shell } = require('electron');

let mainWindow = null;

app.on('ready', () => {
    console.log('iniciando electron');
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 800,
        icon: 'image/calculadora-ico.ico',
        webPreferences: {
            preload: `${__dirname}/preload.js`
        }
    });
    nativeTheme.themeSource = 'dark';

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    mainWindow.loadFile('app/index.html');
});

app.on('window-all-closed', () => {
    app.quit();
});



const template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'sair',
                click: () => app.quit(),
                accelerator: 'Alt+F4'
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Recarregar',
                role: 'reload'
            },
            {
                label: 'Ferramenta de desenvolvedor',
                role: 'toggleDevTools'
            },
            {
                type: 'separator'
            },
            {
                label: 'Aplicar zoom',
                role: 'zoomIn'
            },
            {
                label: 'Reduzir zoom',
                role: 'zoomOut'
            },
            {
                label: 'Restaurar zoom',
                role: 'resetZoom'
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'Documentação',
                click: () => shell.openExternal('')
            },
            {
                type: 'separator'
            },
            {
                label: 'Manual do Usuário',
                click: () => janelaSobre()
            }
        ]
    }
];

const janelaSobre = () => {
    const sobre = new BrowserWindow({
        width: 500,
        height: 600,
        resizable: false,
        autoHideMenuBar:true,
        icon: 'image/manual.ico'
    });
    sobre.loadFile('app/secundaria.html');
};
