import mongodb from "mongodb"

function getClient(){
  const uri = "mongodb+srv://matheus:123@nodejs.nzkzcdk.mongodb.net/?retryWrites=true&w=majority"
  return new mongodb.MongoClient(uri)
}

export default getClient