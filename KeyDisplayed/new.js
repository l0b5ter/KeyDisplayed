const electron = require('electron')
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

module.exports = {
  createWindow : function(){
		this.createWindow = function() {
		// Create the browser window.
		let win = new BrowserWindow({
			width: 200,
			height: 400,
			webPreferences: {
				nodeIntegration: true
			}
		})

		// and load the index.html of the app.
		win.open('https://www.google.com/')};
		app.whenReady().then(createWindow());
		}
};



