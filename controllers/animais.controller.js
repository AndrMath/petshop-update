import animaisServices from "../services/animais.services.js";

async function newAnimal(req, res, next){
  const animal = req.body;
  try{
    if(!animal.nome || !animal.tipo || !animal.proprietarioId){
      throw new Error('Insira todas as informações')
    }
    res.status(200).send(await animaisServices.newAnimalService(animal))
  }catch(err){
    next(err)
  }
}

async function editAnimal(req, res, next){
  const animal = req.body
  try{
    if(!animal.nome || !animal.tipo || !animal.proprietarioId){
      throw new Error('Insira todas as informações')
    }
    if(!req.params.id){
      throw new Error('Insira um id na requisçao')
    }
    res.status(200).send(await animaisServices.editAnimalService(animal, req.params.id))
  }catch(err){
    next(err)
  }
}

async function deleteAnimal(req, res, next){
  try{
    if(!req.params.id){
      throw new Error('Insira um id na requisçao')
    }
    animaisServices.deleteAnimalService(req.params.id)
    res.status(200).send(`Deletado o animal de id ${req.params.id}`)
  }catch(err){
    next(err)
  }
}

async function getAnimals(req, res, next){
  try{
    res.status(200).send(await animaisServices.getAnimalsService())
  }catch(err){
    next(err)
  }
}

async function getanimal(req, res, next){
  try{
    res.status(200).send(await animaisServices.getAnimalService(req.params.id))
  }catch(err){
    next(err)
  }
}

export default {newAnimal, editAnimal, deleteAnimal, getAnimals, getanimal}