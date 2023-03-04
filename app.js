import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { rateLimit } from 'express-rate-limit'
import compression from 'compression'
import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// import topojson from 'topojson-server';
// import topojson from 'topojson-simplify'

// import geojsons from './data/datas.js'
// import datas from './data/datas.json' assert { type: "json" }

const app = express();

const FRONT_URL = process.env.NODE_ENV !== 'production' ? process.env.DEV_FRONT_URL : process.env.FRONT_URL

app.use(cors({
    'credentials': true,
    'origin': FRONT_URL,
    "Access-Control-Allow-Origin": "*",
    'allowedHeaders': ['Content-Length', 'Content-Type', 'application', 'Authorization'],
    'methods': 'GET',
    'preflightContinue': false,
}))

app.use(helmet({
    crossOriginEmbedderPolicy: false,
    // crossOriginResourcePolicy: false,
    crossOriginResourcePolicy: {
            allowOrigins: ['*']
    },
    originAgentCluster: true
}));
//app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "img-src": ["'self'", "https: data:"],
            "default-src": ["*"]
        }
    })
);
app.use(express.json({ limit: '15kb' }))
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '15kb'
}))
app.use(bodyParser.json({ limit: '15kb' }))

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 150,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too Many Request from this IP, your IP has been blocked. Please try again later.'
})

app.use(limiter)
app.use(compression())

const routes = express.Router()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, `./build/`)))

    routes.get('/', (_, res) => {
        res.sendFile(path.join(__dirname, 'index.html'))
    });
}

if (process.env.NODE_ENV !== 'production') {
    app.use('/files', express.static('./files/topojson'))
}

const stream = (pathToZip) => {
    return (req, res, next) => {
        const readableStream = fs.createReadStream(pathToZip, null);
        readableStream.pipe(res)
        next();
    }
};

routes.get('/api', stream('./data/datas.json'), (req, res) => {
    if (req.get('Authorization') === process.env.ACCESS_TOKEN) {
        res
        res.flush()
    } else {
        return res.status(400).json({ error: 'Vous devez posséder un Token secret pour accéder à cette requête.' })
    }
});

app.use('/', routes)

if (process.env.NODE_ENV !== 'production') {
    process.once('uncaughtException', err => {
        console.error(err.stack || err)
        setTimeout(() => process.exit(1), 100)
    })
}

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
})