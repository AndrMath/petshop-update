import postsServices from "../services/posts.services.js";

async function newPost(req, res, next){
  try{
    const post = req.body
    if(!post.titulo || !post.conteudo || !post.comentario){
      throw new Error('Insira todas as informações do post')
    }
    await postsServices.newPost(post)
    res.status(200).send('Postado')
  }catch(err){
    next(err)
  }
}

async function getPosts(req, res, next){
  try{
    res.status(200).send(await postsServices.getPosts())
  }catch(err){
    next(err)
  }
}

async function newComment(req, res, next){
  try{
    const comment = req.body.comentario
    const oid = req.body.oid
    await postsServices.newComment(oid, comment)
    res.status(200).send('Comentario postado')
  }catch(err){
    next(err)
  }
}

export default {newPost, getPosts, newComment}