
import { DocumentQuery, MongoosePromise } from 'mongoose';
import BuildingContactSchema, { IBuildingContactModel } from './buildingContact';
import { FileManager } from '../../common/file/fileManager';


export class BuildingContact {

    constructor() {

    }

    static BuildingContact: any = {
    }

    static Query: any = {

        async getBuildingContact(parent, { }, context): Promise<Array<IBuildingContactModel>> {

            if (!context.user) return null;

            return await BuildingContactSchema.find();

        },
        async getBuildingContactById(parent, { id }, context): Promise<IBuildingContactModel> {

            if (!context.user) return null;

            return await BuildingContactSchema.findById(id);

        },
        async getBuildingContactPage(parent, { pageIndex = 1, pageSize = 10, buildingContact }, context): Promise<Array<IBuildingContactModel>> {

            if (!context.user) return null;

            return await BuildingContactSchema.find(buildingContact).skip((pageIndex - 1) * pageSize)
                .limit(pageSize).sort({ 'isValid': '-1', 'createAt': '-1' });;
        },

        async getBuildingContactCount(parent, { buildingContact }, context): Promise<Number> {

            if (!context.user) return null;

            return await BuildingContactSchema.count(buildingContact);
        },

        async getBuildingContactWhere(parent, { buildingContact }, context): Promise<Array<IBuildingContactModel>> {

            if (!context.user) return null;

            return await BuildingContactSchema.find(buildingContact).sort({ 'createAt': '-1' });
        },
    }

    static Mutation: any = {
        async saveBuildingContact(parent, { buildingContact }, context): Promise<IBuildingContactModel> {
            // if (buildingContact.id && buildingContact.id != "0") {
            //     let res = await BuildingContactSchema.findByIdAndUpdate(buildingContact.id, buildingContact);
            //     Object.assign(res, buildingContact);
            //     return res;
            //     return null;
            // }
            return await BuildingContactSchema.create(buildingContact);
        },
        async deleteBuildingContact(parent, { id }, context): Promise<Boolean> {
            if (!context.user) return null;
            return await BuildingContactSchema.findByIdAndRemove(id) ? true : false;
        },
        async setState(parent, { id }, context): Promise<Boolean> {
            let state = await BuildingContactSchema.findById(id);
            if (state) {
                state.isValid = !state.isValid;
                return await BuildingContactSchema.findByIdAndUpdate(id, state) ? true : false;
            } else {
                return false;
            }
        }
    }
}