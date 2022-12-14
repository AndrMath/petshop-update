import animaisRepository from "../repository/animais.repository.js";
import proprietariosRepository from "../repository/proprietarios.repository.js"

async function newAnimalService(animal){
  if(await proprietariosRepository.getOwner(animal.proprietarioId)){
    return await animaisRepository.newAnimal(animal)
  }
  throw new Error('id de dono não encontrado')
}

async function editAnimalService(animal, id){
  if(await proprietariosRepository.getOwner(animal.proprietarioId)){
    return await animaisRepository.editAnimal(animal, id)
  }
  throw new Error('id de dono não encontrado')
}

async function deleteAnimalService(id){
  await animaisRepository.deleteAnimal(id)
}

async function getAnimalsService(){
  return await animaisRepository.getAnimals()
}

async function getAnimalService(id){
  return await animaisRepository.getAnimal(id)
}

export default {newAnimalService, editAnimalService, deleteAnimalService, getAnimalsService, getAnimalService}
