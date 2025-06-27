import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const exercisesPath = path.resolve(__dirname, "..")

const files = fs.readdirSync(exercisesPath)

const jobFolders = files.filter(file => {
  const fullPath = path.join(exercisesPath, file)
  return fs.statSync(fullPath).isDirectory() && file.startsWith("job")
})

console.log("Dossiers 'job*' trouvés dans 'exercises' :", jobFolders)
