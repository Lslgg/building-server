import { BuildingMenu } from "./buildingMenu/buildingMenu.resolver";



export class BuildingResolver {
    
    constructor() {

    }
    static Building: any = {
        ...BuildingMenu.BuildingMenu
    }

    static Query: any = {
        ...BuildingMenu.Query
    }

    static Mutation: any = {
        ...BuildingMenu.Mutation
    }
}