import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })
import geojsons from './datas.js'

const app = express();

app.use(cors({
    mode: 'no-cors',
    credentials: true,
    origin: '*',
    "Access-Control-Allow-Origin": '*',
    'allowedHeaders': ['application/javascript'],
    'methods': 'GET, OPTIONS, HEAD, PUT, PATCH, POST, DELETE',
    'preflightContinue': false,
}))

app.use('/files', express.static('./files'))

app.get('/api', (req, res) => {
    res.send(geojsons)
})

if (process.env.NODE_ENV !== 'production') {
    process.once('uncaughtException', err => {
        console.error(err.stack || err)
        setTimeout(() => process.exit(1), 100)
    })
}

const PORT = process.env.PORT || 3001

const server = app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
})