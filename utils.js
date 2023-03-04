let files = [];
const ThroughDirectory = (directory) => {
    fs.readdirSync(directory).forEach(File => {
        const absolute = path.join(directory, File);
        if (fs.statSync(absolute).isDirectory())
            return ThroughDirectory(absolute);
        else return files.push(absolute);
    });
    return files
}

/**
 * Function to convert geojson files to topojson (lighter files)
 */

app.use('/convert/geojson/to/topojson', async (req, res) => {
    const dirname = './files/geojson/'
    let array = ThroughDirectory(dirname)

    const response = array.map(async file => {
        fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return console.error(err)
            }

            const geo = JSON.parse(data)
            const topoData = topojson.topology({ collection: geo }, { "property-transform": function (object) { return object.properties; } })

            const filePath = file.substring(0, file.lastIndexOf("\\"));
            const fileName = file.substring(file.lastIndexOf("\\"), file.lastIndexOf("."));

            if (!fs.existsSync(`${__dirname}/topojson/${filePath}`)) {
                fs.mkdirSync(`${__dirname}/topojson/${filePath}`, { recursive: true })
            }

            fs.writeFile(`${__dirname}/topojson/${filePath}/${fileName}.json`, JSON.stringify(topoData), err => {
                if (err) {
                    return console.error(err)
                }
            })
        })
    })
    Promise.all(response).then(res => {
        return res
    })
})

/**
 * Function to simplify topojson to reduce files size
 */

app.get('/simplify/topojson', async (req, res) => {
    const dirname = './files/topojson'
    let array = ThroughDirectory(dirname)

    const response = array.map(async (file, i) => {
        fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return console.error(err)
            }

            const geo = JSON.parse(data)
            const topology = topojson.simplify(geo);

            const filePath = file.substring(0, file.lastIndexOf("\\"));
            const fileName = file.substring(file.lastIndexOf("\\"), file.length);

            if (!fs.existsSync(`${__dirname}/topojson-simplified/${filePath}`)) {
                fs.mkdirSync(`${__dirname}/topojson-simplified/${filePath}`, { recursive: true })
            }

            fs.writeFile(`${__dirname}/topojson-simplified/${filePath}/${fileName}`, JSON.stringify(topology), err => {
                if (err) {
                    return console.error(err)
                }
            })
        })
    })
    Promise.all(response).then(res => {
        return res
    })
})

/**
 * Create the main datas.json file
 */

app.use('/create/datas', async (req, res) => {
    const dirname = './datas.js'

    fs.readFile(dirname, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return console.error(err)
        }

        fs.writeFile(`${__dirname}/datas.json`, JSON.stringify(geojsons), err => {
            if (err) {
                return console.error(err)
            }
        })
    })
})