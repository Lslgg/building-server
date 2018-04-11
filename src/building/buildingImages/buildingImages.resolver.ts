
import { DocumentQuery, MongoosePromise } from 'mongoose';
import BuildingImagesSchema, { IBuildingImagesModel } from './buildingImages';
import { FileManager } from '../../common/file/fileManager';


export class BuildingImages {

    constructor() {

    }

    static BuildingImages: any = {
        Images(model) {
            let promise = new Promise<Array<any>>((resolve, reject) => {
                let fm = new FileManager();
                let imgs = fm.getFileByIds(model.imageIds);
                resolve(imgs);
            });
            return promise;
        }
    }

    static Query: any = {

        async getBuildingImages(parent, { }, context): Promise<Array<IBuildingImagesModel>> {

            if (!context.user) return null;

            return await BuildingImagesSchema.find();

        },
        async getBuildingImagesById(parent, { id }, context): Promise<IBuildingImagesModel> {

            if (!context.user) return null;

            return await BuildingImagesSchema.findById(id);

        },
        async getBuildingImagesPage(parent, { pageIndex = 1, pageSize = 10, buildingImages }, context): Promise<Array<IBuildingImagesModel>> {

            if (!context.user) return null;

            return await BuildingImagesSchema.find(buildingImages).skip((pageIndex - 1) * pageSize).limit(pageSize);
        },

        async getBuildingImagesCount(parent, { buildingImages }, context): Promise<Number> {

            if (!context.user) return null;

            return await BuildingImagesSchema.count(buildingImages);
        },

        async getBuildingImagesWhere(parent, { buildingImages }, context): Promise<Array<IBuildingImagesModel>> {
            return await BuildingImagesSchema.find(buildingImages);
        },
    }

    static Mutation: any = {
        async saveBuildingImages(parent, { buildingImages }, context): Promise<IBuildingImagesModel> {
            if (!context.user) return null;
            if (buildingImages.id && buildingImages.id != "0") {
                let res = await BuildingImagesSchema.findByIdAndUpdate(buildingImages.id, buildingImages);
                Object.assign(res, buildingImages);
                return res;
            }
            return await BuildingImagesSchema.create(buildingImages);
        },
        async deleteBuildingImages(parent, { id }, context): Promise<Boolean> {
            if (!context.user) return null;
            return await BuildingImagesSchema.findByIdAndRemove(id) ? true : false;
        },
    }
}