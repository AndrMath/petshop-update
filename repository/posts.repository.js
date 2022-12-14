import getClient from "./mongo.db.js";
import { ObjectId } from 'mongodb'

async function createPost(postContent){
  const client = getClient()
  try{
    await client.connect()
    await client.db('petshop').collection('posts').insertOne(postContent)
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function getPosts(){
  const client = getClient()
  try{
    await client.connect()
    return await client.db('petshop').collection('posts').find({}).toArray()
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function newComment(oid, comment){
  const client = getClient()
  try{
    await client.connect()
    const post = await client.db('petshop').collection('posts').findOne({
      _id: ObjectId(oid)
    })
    post.comentario.push(comment)

    await client.db('petshop').collection('posts').updateOne({
      _id: ObjectId(oid)
    },
    {
      $set: {...post}
    })
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

export default {createPost, getPosts, newComment}