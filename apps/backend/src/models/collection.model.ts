import { Schema, Types, model } from "mongoose";

const collectionSchema = new Schema({
    types: {
        type: Array<string>,
        required: true
    },
    users: {
        type: [{type: Types.ObjectId, ref: 'User'}],
        required: true,
        selected: false
    },
    cards: {
        type: [{type: Types.ObjectId, ref: 'Card'}],
        required: true
    }
})

const Collection = model("Collection", collectionSchema);

export default Collection;