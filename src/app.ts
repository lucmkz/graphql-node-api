import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middware()
    }

    private middware(): void {
        this.express.use('/graphql', graphqlHTTP({
            schema
        }))
    }
}

export default new App().express

