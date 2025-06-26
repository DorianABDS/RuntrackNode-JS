import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)

function clearPath(path) {
  return path.replace(/[/\\]+$/, '')
}

const nameFolder = path.basename(__filename)
const extension = path.extname(__filename)
const parentPath = clearPath(path.dirname(__filename))

console.log(`
Nom du fichier      : ${nameFolder}
Extension           : ${extension}
Répertoire parent   : ${parentPath}
`)
