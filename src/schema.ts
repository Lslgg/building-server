var { makeExecutableSchema } = require('graphql-tools');
var requireText = require('require-text');
import resolvers from './resolvers'

var Base = requireText('./base.gql', require);
import { SystemSchema } from "./gql-system";
import { BuildingSchema } from './building';
//基础表
var typeDefs = [Base];
//系统表
typeDefs = typeDefs.concat(SystemSchema);
//装饰
typeDefs = typeDefs.concat(BuildingSchema);

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
  logger: { log: e => {
    // console.log(e)
  } }
})


export default schema;