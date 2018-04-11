import { model, Schema, Document } from 'mongoose';

export interface IBuildingImagesModel extends Document {
    id: string
    title: String
    brief: String
    type: String
    imageIds: [String]
    desc: String
    updateAt: Date
    createAt: Date
}

let schema: Schema = new Schema({
    title: String,
    brief: String,
    type: String,
    imageIds: [String],
    desc: String,
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

export default model<IBuildingImagesModel>('BuildingImages', schema);
