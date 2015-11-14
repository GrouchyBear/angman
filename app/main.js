// app/main.js

// Module to control application life.
var app = require('app');

// Native browser window
var BrowserWindow = require('browser-window');
var mainWindow = null;

// Quit all windows when closed
app.on('window-all-closed', function (){
  if (process.platform != 'darwin'){
    app.quit();
  }
});

// Method called when Electron has finished
// init and is ready to create Bw
app.on('ready', function (){

  // Create Bw
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Load index of app
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Dev Tools
  // mainWindow.openDevTools();
  // Emitted when window is closed
  mainWindow.on('closed', function (){

    mainWindow = null;

  });

});
