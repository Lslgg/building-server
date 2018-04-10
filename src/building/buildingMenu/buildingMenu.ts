import { model, Schema, Document } from 'mongoose';

export interface IBuildingMenuModel extends Document {
    id: string
    title: String
    parentId: String
    isSecond: Boolean
    updateAt: Date
    createAt: Date
}

let schema: Schema = new Schema({
    title: String,
    parentId: String,
    isSecond: Boolean,
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

export default model<IBuildingMenuModel>('BuildingMenu', schema);
