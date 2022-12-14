import Servico from "../models/servicos.model.js";
import animal from "../models/animais.model.js"
import proprietario from "../models/proprietario.model.js"

async function newServico(servico){
  try{
    return await Servico.create(servico)
  }catch(err){
    throw err
  }
}

async function getServicos(){
  try{
    return await Servico.findAll({

    })
  }catch(err){
    throw err
  }
}

async function getServicosByOwner(_id){
  try{
    return await Servico.findAll({
      include:[
        {model: animal},
        {model: proprietario}
      ]
    })
  }catch(err){
    throw err
  }
}

export default {newServico, getServicos, getServicosByOwner}