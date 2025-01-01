import { Schema, Types, model } from "mongoose";

const collectionSchema = new Schema({
    __v: { 
        type: Number, 
        select: false 
    },
    tags: {
        type: Array<string>,
        required: true
    },
    cards: {
        type: [{type: Types.ObjectId, ref: 'Card'}],
        required: true
    }
})

const Collection = model("Collection", collectionSchema);

export default Collection;