
import { DocumentQuery, MongoosePromise } from 'mongoose';
import BuildingArticleSchema, { IBuildingArticleModel } from './buildingArticle';
import { FileManager } from '../../common/file/fileManager';


export class BuildingArticle {

    constructor() {

    }

    static BuildingArticle: any = {
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

        async getBuildingArticle(parent, { }, context): Promise<Array<IBuildingArticleModel>> {

            if (!context.user) return null;

            return await BuildingArticleSchema.find();

        },
        async getBuildingArticleById(parent, { id }, context): Promise<IBuildingArticleModel> {

            if (!context.user) return null;

            return await BuildingArticleSchema.findById(id);

        },
        async getBuildingArticlePage(parent, { pageIndex = 1, pageSize = 10, buildingArticle }, context): Promise<Array<IBuildingArticleModel>> {

            if (!context.user) return null;

            return await BuildingArticleSchema.find(buildingArticle).skip((pageIndex - 1) * pageSize).limit(pageSize);
        },

        async getBuildingArticleCount(parent, { buildingArticle }, context): Promise<Number> {

            // if (!context.user) return null;

            return await BuildingArticleSchema.count(buildingArticle);
        },

        async getBuildingArticleWhere(parent, { buildingArticle }, context): Promise<Array<IBuildingArticleModel>> {
            return await BuildingArticleSchema.find(buildingArticle);
        },
    }

    static Mutation: any = {
        async saveBuildingArticle(parent, { buildingArticle }, context): Promise<IBuildingArticleModel> {
            if (!context.user) return null;
            if (buildingArticle.id && buildingArticle.id != "0") {
                let res = await BuildingArticleSchema.findByIdAndUpdate(buildingArticle.id, buildingArticle);
                Object.assign(res, buildingArticle);
                return res;
            }
            return await BuildingArticleSchema.create(buildingArticle);
        },
        async deleteBuildingArticle(parent, { id }, context): Promise<Boolean> {
            if (!context.user) return null;
            return await BuildingArticleSchema.findByIdAndRemove(id) ? true : false;
        },
    }
}