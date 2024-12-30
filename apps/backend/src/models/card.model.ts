import { LANGUAGES } from './models.const';
import { Schema, model, Types } from "mongoose";
import { ICard } from '../interfaces/card.interface';

const cardSchema = new Schema<ICard>({
    _id: {
        type: Types.ObjectId,
        required: true
    },
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

const Card = model<ICard>("Card", cardSchema);

export default Card;