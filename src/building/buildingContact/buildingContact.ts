import { model, Schema, Document } from 'mongoose';

export interface IBuildingContactModel extends Document {
    id: string
    title: String
    name: String
    email: String
    phone: String
    content: String
    isValid: Boolean
    updateAt: Date
    createAt: Date
}

let schema: Schema = new Schema({
    title: String,
    name: String,
    email: String,
    phone: String,
    content: String,
    isValid: Boolean,
    createAt: {
        type: Date,
        default: new Date(),
        required: true
    },
    updateAt: {
        type: Date,
        default: new Date(),
        required: true
    }
});

export default model<IBuildingContactModel>('BuildingContact', schema);
