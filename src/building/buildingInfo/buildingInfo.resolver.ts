
import { DocumentQuery, MongoosePromise } from 'mongoose';
import BuildingInfoSchema, { IBuildingInfoModel } from './buildingInfo';
import { FileManager } from '../../common/file/fileManager';


export class BuildingInfo {

    constructor() {

    }

    static BuildingInfo: any = {
    }

    static Query: any = {

        async getBuildingInfo(parent, { }, context): Promise<Array<IBuildingInfoModel>> {

            // if (!context.user) return null;

            return await BuildingInfoSchema.find();

        },
        async getBuildingInfoById(parent, { id }, context): Promise<IBuildingInfoModel> {

            if (!context.user) return null;

            return await BuildingInfoSchema.findById(id);

        },
        async getBuildingInfoPage(parent, { pageIndex = 1, pageSize = 10, buildingInfo }, context): Promise<Array<IBuildingInfoModel>> {

            if (!context.user) return null;

            return await BuildingInfoSchema.find(buildingInfo).skip((pageIndex - 1) * pageSize).limit(pageSize);
        },

        async getBuildingInfoCount(parent, { buildingInfo }, context): Promise<Number> {

            if (!context.user) return null;

            return await BuildingInfoSchema.count(buildingInfo);
        },

        async getBuildingInfoWhere(parent, { buildingInfo }, context): Promise<Array<IBuildingInfoModel>> {
            return await BuildingInfoSchema.find(buildingInfo);
        },
    }

    static Mutation: any = {
        async saveBuildingInfo(parent, { buildingInfo }, context): Promise<IBuildingInfoModel> {
            if (!context.user) return null;
            if (buildingInfo.id && buildingInfo.id != "0") {
                let res = await BuildingInfoSchema.findByIdAndUpdate(buildingInfo.id, buildingInfo);
                Object.assign(res, buildingInfo);
                return res;
            }
            return null;
            // return await BuildingInfoSchema.create(buildingInfo);
        },
        async deleteBuildingInfo(parent, { id }, context): Promise<Boolean> {
            return null;
            // if (!context.user) return null;
            // return await BuildingInfoSchema.findByIdAndRemove(id) ? true : false;
        },
    }
}