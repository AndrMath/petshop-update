import proprietariosRepository from "../repository/proprietarios.repository.js";

async function newOwnerService(Owner){
  return await proprietariosRepository.newOwner(Owner);
}

async function editOwnerService(Owner, id){
  return await proprietariosRepository.editOwner(Owner, id);
}

async function deleteOwnerService(id){
  await proprietariosRepository.deleteOwner(id);
}

async function getOwnersService(){
  return await proprietariosRepository.getOwners();
}

async function getOwnerService(id){
  return await proprietariosRepository.getOwner(id);
}

export default {newOwnerService, editOwnerService, deleteOwnerService, getOwnersService, getOwnerService}