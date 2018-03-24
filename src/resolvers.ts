
import { Scalar } from "./common/scalar/scalar";
import { SystemResolver } from './gql-system';


export default {
	Query: {
		...SystemResolver.Query,
	},
	Mutation: {
		...SystemResolver.Mutation,
	},
	...SystemResolver.System,
	...Scalar.Scalar,
};
