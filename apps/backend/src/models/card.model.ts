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
    translation: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: false
    },
    synonims: {
        type: Array<string>,
        required: false
    }
})

const Card = mongoose.model("Card", cardSchema);

export default Card;