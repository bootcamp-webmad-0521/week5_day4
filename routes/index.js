module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/peliculas', require('./movies.routes.js'))
}