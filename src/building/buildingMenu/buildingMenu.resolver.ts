
import { DocumentQuery, MongoosePromise } from 'mongoose';
import BuildingMenuSchema, { IBuildingMenuModel } from './buildingMenu';


export class BuildingMenu {

    constructor() {

    }

    static BuildingMenu: any = {}

    static Query: any = {

        async getBuildingMenu(parent, { }, context): Promise<Array<IBuildingMenuModel>> {

            // if (!context.user) return null;

            return await BuildingMenuSchema.find();

        },
        async getBuildingMenuById(parent, { id }, context): Promise<IBuildingMenuModel> {

            if (!context.user) return null;

            return await BuildingMenuSchema.findById(id);

        },
        async getBuildingMenuPage(parent, { pageIndex = 1, pageSize = 10, buildingMenu }, context): Promise<Array<IBuildingMenuModel>> {

            if (!context.user) return null;

            return await BuildingMenuSchema.find(buildingMenu).skip((pageIndex - 1) * pageSize).limit(pageSize);
        },

        async getBuildingMenuCount(parent, { buildingMenu }, context): Promise<Number> {

            if (!context.user) return null;

            return await BuildingMenuSchema.count(buildingMenu);
        },

        async getBuildingMenuWhere(parent, { buildingMenu }, context): Promise<Array<IBuildingMenuModel>> {
            return await BuildingMenuSchema.find(buildingMenu);
        },
    }

    static Mutation: any = {
        async saveBuildingMenu(parent, { buildingMenu }, context): Promise<IBuildingMenuModel> {
            if (!context.user) return null;
            if (buildingMenu.id && buildingMenu.id != "0") {
                let res = await BuildingMenuSchema.findByIdAndUpdate(buildingMenu.id, buildingMenu);
                Object.assign(res, buildingMenu);
                return res;
            }
            // return null;
            return await BuildingMenuSchema.create(buildingMenu);
        },
        deleteBuildingMenu(parent, { id }, context): Promise<Boolean> {
            if (!context.user) return null;
            return new Promise<Boolean>((resolve, reject) => {
                resolve(false);
            });
        },
    }
}