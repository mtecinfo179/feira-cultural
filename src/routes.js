const { Router } = require('express')

const routes = Router()

routes.get('/', (_request, response) => {
    return response.send('Server ok!')
})

module.exports = routes