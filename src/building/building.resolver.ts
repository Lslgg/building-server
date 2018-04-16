import { BuildingMenu } from "./buildingMenu/buildingMenu.resolver";
import { BuildingImages } from "./buildingImages/buildingImages.resolver";
import { BuildingInfo } from "./buildingInfo/buildingInfo.resolver";
import { BuildingArticle } from "./buildingArticle/buildingArticle.resolver";
import { BuildingContact } from "./buildingContact/buildingContact.resolver";



export class BuildingResolver {

    constructor() {

    }
    static Building: any = {
        BuildingMenu: BuildingMenu.BuildingMenu,
        BuildingImages: BuildingImages.BuildingImages,
        BuildingArticle: BuildingArticle.BuildingArticle,
    }

    static Query: any = {
        ...BuildingMenu.Query,
        ...BuildingImages.Query,
        ...BuildingInfo.Query,
        ...BuildingArticle.Query,
        ...BuildingContact.Query
    }

    static Mutation: any = {
        ...BuildingMenu.Mutation,
        ...BuildingImages.Mutation,
        ...BuildingInfo.Mutation,
        ...BuildingArticle.Mutation,
        ...BuildingContact.Mutation
    }
}