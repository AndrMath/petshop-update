import proprietariosServices from "../services/proprietarios.services.js";

async function newOwner(req, res, next){
  const owner = req.body
  try{
    if(!owner.nome || !owner.telefone){
      throw new Error('Insira todas as informações')
    }
    res.status(200).send(await proprietariosServices.newOwnerService(owner))
  }catch(err){
    next(err)
  }
}

async function editOwner(req, res, next){
  const owner = req.body
  try{
    if(!owner.nome || !owner.telefone){
      throw new Error('Insira todas as informações')
    }
    if(!req.params.id){
      throw new Error('Insira um id na requisição')
    }
    res.status(200).send(await proprietariosServices.editOwnerService(owner, req.params.id))
  }catch(err){
    next(err)
  }
}

async function deleteOwner(req, res, next){
  try{
    if(!req.params.id){
      throw new Error('Insira um id na requisição')
    }
    await proprietariosServices.deleteOwnerService(req.params.id)
    res.status(200).send(`Deletado o animal`)
  }catch(err){
    next(err)
  }
}

async function getOwners(req, res, next){
  try{
    res.status(200).send(await proprietariosServices.getOwnersService())
  }catch(err){
    next(err)
  }
}

async function getOwner(req, res, next){
  try{
    res.status(200).send(await proprietariosServices.getOwnerService(req.params.id))
  }catch(err){
    next(err)
  }
}

export default {newOwner, editOwner, deleteOwner, getOwners, getOwner}