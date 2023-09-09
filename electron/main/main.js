const { app, BrowserWindow, ipcMain, clipboard, screen, globalShortcut } = require('electron')
const path = require('path')

const createWindow = () => {
    // Create the browser window.
    const {width, height} = screen.getPrimaryDisplay().workAreaSize
    console.log(width, height)
    const win = new BrowserWindow({
        maxWidth: 400,
        minWidth:300,
        width: 320, 
        height: 740, 
        x: width, // 设置窗口的x坐标，使其位于屏幕的右侧
        y: 200, // 设置窗口的y坐标，使其位于屏幕的顶部
        // title: 'copyAchat', 
        webPreferences: {
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js'), // '/Users/tangzihang1/copyAchat/electron/main/preload.js',
            nodeIntegration: true
        },
        frame:false,
        // titleBarStyle: 'customButtonsOnHover'
    })
    // win.webContents.openDevTools();
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

    win.setAlwaysOnTop(true)

    win.on('focus', ()=>{
        win.webContents.send('electron_focus')
    })

    ipcMain.on('setAlwaysOnTop', (event, alwaysOnTop) => {
        // console.log(alwaysOnTop)
        if (win) {
            // alwaysOnTop = !alwaysOnTop
          win.setAlwaysOnTop(alwaysOnTop);
        }
      })
    return win
}

app.whenReady().then(() => {
    let win = createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            win = createWindow()
        }
    })
    globalShortcut.register('Command+;', () => {
        // console.log('win foucs')
        win.show()
        win.focus()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
        globalShortcut.unregisterAll()
    }
})