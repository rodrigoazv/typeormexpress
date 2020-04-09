import express from 'express';
import morgan from 'morgan';

//iuse

export class Application{
    public express: express.Application

    public constructor (){
        this.express = express();
        this.middlewares();
        this.routes();
    }
    private middlewares(){
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended : true}));
        this.express.use(morgan('dev'));
    }
    // create typeorm connection
    private routes(): void{
        this.express.use(require('./routes'));
    }

}

export default new Application().express