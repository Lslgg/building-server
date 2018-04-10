
import { Scalar } from "./common/scalar/scalar";
import { SystemResolver } from './gql-system';
import { BuildingResolver } from "./building";


export default {
	Query: {
		...SystemResolver.Query,
		...BuildingResolver.Query,
	},
	Mutation: {
		...SystemResolver.Mutation,
		...BuildingResolver.Mutation
	},
	...SystemResolver.System,
	...BuildingResolver.Building,
	...Scalar.Scalar,
};
