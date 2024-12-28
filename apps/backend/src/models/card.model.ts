import { LANGUAGES } from './models.const';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    message: {
        type: String,
        required: true,
        unique: true
    },
    language: {
        type: String,
        enum: LANGUAGES,
        required: true
    },
    transaliton: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: true
    }
})

const Card = mongoose.model("Card", cardSchema);

export default Card;