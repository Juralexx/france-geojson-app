module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.geojson$/,
        use: [
            {
                loader: 'json-loader'
            },
        ]
    })
    return config;
}