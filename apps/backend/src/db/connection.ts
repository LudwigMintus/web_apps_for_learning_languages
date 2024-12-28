import mongoose from 'mongoose';

const url = "mongodb://127.0.0.1:27017/test";

export default async function connectToDatabase() {
    mongoose.Promise = global.Promise;

    const db = mongoose.connection;

    db.on('connecting', () => {
        console.info('Connecting to MongoDB...');
    });

    db.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
        mongoose.disconnect();
    });

    db.on('connected', () => {
        console.info('Connected to MongoDB!');
    });

    db.once('open', () => {
        console.info('MongoDB connection opened!');
    });

    db.on('reconnected', () => {
        console.info('MongoDB reconnected!');
    });

    await mongoose.connect(url);
}