import owner from '../models/proprietario.model.js'

async function newOwner(Owner){
  try{
    return await owner.create(Owner)
  }catch(err){
    throw err;
  }
}

async function editOwner(Owner, id){
  try{
    await owner.update(Owner,{
      where:{
        proprietarioId: id
      }
    })
    return await owner.findByPk(id)
  }catch(err){
    throw err;
  }
}

async function deleteOwner(id){
  try{
    await owner.destroy({
      where:{
        proprietarioId: id
      }
    })
  }catch(err){
    throw err;
  }
}

async function getOwners(){
  try{
    return await owner.findAll()
  }catch(err){
    throw err;
  }
}

async function getOwner(id){
  try{
    return await owner.findByPk(id)
  }catch(err){
    throw err;
  }
}

export default {newOwner, editOwner, deleteOwner, getOwners, getOwner}