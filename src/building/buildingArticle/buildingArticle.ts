import { model, Schema, Document } from 'mongoose';

export interface IBuildingArticleModel extends Document {
    id: string
    type: String
    title: String
    author: String
    imageIds: [String]
    content: String
    desc: String
    updateAt: Date
    createAt: Date
}

let schema: Schema = new Schema({
    type: String,
    title: String,
    author: String,
    imageIds: [String],
    content: String,
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

export default model<IBuildingArticleModel>('BuildingArticle', schema);
