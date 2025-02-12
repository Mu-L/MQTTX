import { BrowserWindow, dialog } from 'electron'
import xlsx, { WorkBook } from 'xlsx'

const saveExcel = (win: BrowserWindow, filename: string, workbook: WorkBook) => {
  dialog
    .showSaveDialog(win, {
      title: 'Dowload file',
      defaultPath: `${filename}.xlsx`,
    })
    .then((res) => {
      const { filePath } = res
      let caughtError = false
      if (filePath) {
        try {
          xlsx.writeFile(workbook, filePath)
        } catch (err) {
          if (err instanceof Error) {
            dialog.showMessageBox({
              type: 'error',
              title: 'System',
              message: `An error ocurred creating the file ${err.toString()}`,
            })
          }
          caughtError = true
        }
        if (!caughtError) {
          win.webContents.send('saved')
        }
      }
    })
}

export default saveExcel
