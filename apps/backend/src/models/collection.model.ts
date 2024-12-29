import Card from "./card.model";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    types: {
        type: Array<string>,
        required: true
    },
    cards: {
        type: Array<typeof Card>,
        required: true
    }
})

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;