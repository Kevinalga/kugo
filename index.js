import express from 'express'
import url from 'url'

function relPath (path) {
    const dirUrl = import.meta.url
    const fileUrl = new URL('./' + path, dirUrl)
    const absolutePath = url.fileURLToPath(fileUrl)
    return absolutePath
}

const app = express()
const port = 34564

app.get('/', (req, res) => {
    res.sendFile(relPath('index.html'))
})


app.get('/isAdmin', (req, res) => {
    res.send({ isAdmin: true })
})


app.use(express.static('frontend'))
  

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})