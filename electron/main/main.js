const { app, BrowserWindow } = require('electron')
const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({width: 400, height: 732, title: 'copyAchat'})

    // and load the index.html of the app.
    // win.webContents.setUserAgent("Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19");
    // win.loadURL('https://www.xiaohongshu.com/')

    // const win = new BrowserWindow({
    //     width: 800,
    //     height: 600
    // })

    win.loadURL('http://localhost:5173/')
    // win.loadFile('index.html')

}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})