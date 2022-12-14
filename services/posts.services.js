import postsRepository from "../repository/posts.repository.js";

async function newPost(postInfo){
  await postsRepository.createPost(postInfo)
}

async function getPosts(){
  return await postsRepository.getPosts()
}

async function newComment(oid, comment){
  
  await postsRepository.newComment(oid, comment)
}

export default {newPost, getPosts, newComment}