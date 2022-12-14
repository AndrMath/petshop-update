import Animal from "../models/animais.model.js"

async function newAnimal(animal){
  try{
    return await Animal.create(animal)
  }catch(err){
    throw err;
  }
}

async function editAnimal(animal, id){
  try{
    await Animal.update(animal, {
      where:{
        animalId: id
      }
    })
    return await Animal.findByPk(id)
  }catch(err){
    throw err;
  }
}

async function deleteAnimal(id){
  try{
    await Animal.destroy({
      where:{
        animalId:id
      }
    })
  }catch(err){
    throw err;
  }
}

async function getAnimals(){
  try{
    return await Animal.findAll()
  }catch(err){
    throw err;
  }
}

async function getAnimal(id){
  try{
    return await Animal.findByPk(id)
  }catch(err){
    throw err;
  }
}

export default {newAnimal, editAnimal, deleteAnimal, getAnimals, getAnimal}