const { app, BrowserWindow } = require("electron");
const remoteMain = require("@electron/remote/main");

remoteMain.initialize();

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule: true,
        },
    });

    window.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

// Quit all windows when closed 
// MacOS fix so does not show on their menu bar
app.on("window-all-close", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows.length === 0) createWindow();
});