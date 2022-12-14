import servicosRepository from "../repository/servicos.repository.js";

async function newServico(servico){
  return await servicosRepository.newServico(servico)
}

async function getServicos(){
  return await servicosRepository.getServicos()
}

export default {newServico, getServicos}