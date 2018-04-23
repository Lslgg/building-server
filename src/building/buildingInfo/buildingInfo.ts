import { model, Schema, Document } from 'mongoose';

export interface IBuildingInfoModel extends Document {
    id: string
    phone: String
    email: String
    qqLink: String
    tcWeibo: String
    xlWeibo: String
    tbLink: String
    address: String
    brief: String
    copyright: String
    code: String
    contact1: String
    contact2: String
    board: String
    updateAt: Date
    createAt: Date
}

let schema: Schema = new Schema({
    phone: String,
    email: String,
    qqLink: String,
    tcWeibo: String,
    xlWeibo: String,
    tbLink: String,
    address: String,
    brief: String,
    code: String,
    copyright: String,
    contact1: String,
    contact2: String,
    board: String,
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

export default model<IBuildingInfoModel>('BuildingInfo', schema);
