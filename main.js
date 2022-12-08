// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function handleConsoleLog (event, text) {
  console.log(text)
}

function openCadastrarFuncionario(event) {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    autoHideMenuBar: true,
    maximizable: false,
    minimizable: false,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })
  mainWindow.loadFile('./pages/cadastrar/funcionario.html')
}

function openCadastrarHospital(event) {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    autoHideMenuBar: true,
    maximizable: false,
    minimizable: false,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })
  mainWindow.loadFile('./pages/cadastrar/hospital.html')
}

function openCadastrarPaciente(event) {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    autoHideMenuBar: true,
    maximizable: false,
    minimizable: false,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })
  mainWindow.loadFile('./pages/cadastrar/paciente.html')
}

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minHeight: 700,
    minWidth: 1000,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./pages/atividade.html')
  //mainWindow.loadFile('./pages/cadastrar/funcionario.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  ipcMain.on('console-log', handleConsoleLog)
  ipcMain.on('open-cadastrar-funcionario', openCadastrarFuncionario)
  ipcMain.on('open-cadastrar-hospital', openCadastrarHospital)
  ipcMain.on('open-cadastrar-paciente', openCadastrarPaciente)

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
