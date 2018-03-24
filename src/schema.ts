var { makeExecutableSchema } = require('graphql-tools');
var requireText = require('require-text');
import resolvers from './resolvers'

var Base = requireText('./base.gql', require);
import { SystemSchema } from "./gql-system";
//基础表
var typeDefs = [Base];
//系统表
typeDefs = typeDefs.concat(SystemSchema);

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
  logger: { log: e => {
    // console.log(e)
  } }
})


export default schema;