const express = require('express');
const { APP_PORT } = process.env
const app = express()
const port = APP_PORT || 3000
const cors = require('cors');
const notFoundRoute = require('@middlewares/404-middleware');
const todoRoute = require('@routes/todo-route');
const mongoConnect = require('@databases/mongodb-database');

module.exports = () => {
    // set request data in 'req.body'
    app.use(express.urlencoded({ extended : false }))

    // init JSON parser
    app.use(express.json())

    // init cors config
    app.use(cors())

    // init routes
    app.use("/api/todos", todoRoute)
    app.use(notFoundRoute)

    // launch the app
    mongoConnect()
        .then(() => app.listen(port, () => console.log(`App is running on port ${port}...`)))
}