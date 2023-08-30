const { app, BrowserWindow, ipcMain, clipboard } = require('electron')
const path = require('path')

const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({width: 400, height: 732, title: 'copyAchat', webPreferences: {
        contextIsolation: false,
        preload: path.join(__dirname, 'preload.js'), // '/Users/tangzihang1/copyAchat/electron/main/preload.js',
        nodeIntegration: true
    }})
    // and load the index.html of the app.
    // win.webContents.setUserAgent("Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19");
    // win.loadURL('https://www.xiaohongshu.com/')

    // const win = new BrowserWindow({
    //     width: 800,
    //     height: 600
    // })
    
    win.loadURL('http://localhost:5173/')
    // 开启开发者工具
    // win.webContents.openDevTools()
    const history = []

    // 定时任务，每 500 毫秒监听一次剪贴板变化
    setInterval(() => {
        const text = clipboard.readText()
        if (text){
            if (history.length != 0 && text == history[0]) {
                return 
            }
            history.unshift(text)
            win.webContents.send('clipboard-history', history)
        }
        
    }, 500)

    ipcMain.on('getClipBoardHistory', (e, args) => {
        win.webContents.send('clipboard-history', history)
    })
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