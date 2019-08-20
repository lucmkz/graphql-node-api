import * as express from 'express'

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middware()
    }

    private middware(): void {
        this.express.use('/hello', (req, res, next) => {
            res.send({
                hello: 'hello world'
            })
        })
    }
}

export default new App().express

