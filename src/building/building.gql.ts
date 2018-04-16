var requireText = require('require-text');
var BuildingMenu = requireText('./buildingMenu/buildingMenu.gql', require);
var BuildingImages = requireText('./buildingImages/buildingImages.gql', require);
var BuildingInfo = requireText('./buildingInfo/buildingInfo.gql', require);
var BuildingArticle = requireText('./buildingArticle/buildingArticle.gql', require);
var BuildingContact = requireText('./buildingContact/buildingContact.gql', require);

export const BuildingSchema = [
    BuildingMenu,
    BuildingImages,
    BuildingInfo,
    BuildingArticle,
    BuildingContact
];