import mongoose from 'mongoose';

require('dotenv').config();

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongoose
            .connect(
                `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            )
            .then((connection) => {
                console.log('CONECTADO AO MONGODB');
            })
            .catch((err) => {
                console.log('ERRO AO CONECTAR AO MONGODB');
            });
    }
}

export default new Database();
