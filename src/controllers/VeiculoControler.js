const veiculo = require('../models/Veiculo');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON


const consultarVeiculos = async (req, res) => {
  try {

    const results = await veiculo.findAll({
      where: {
        dsVeiculo: req.body.dsVeiculo
      }
    });

    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar a consulta.' });
  }
};

const criarVeiculo = async (req, res, next) => {
  try {

    const newVeiculo = await veiculo.create(req.body);
    res.status(201)
    res.json(newVeiculo);

  } catch (error) {
    next(error);
  }
};


const atualizarVeivulo = async (req, res, next) => {

  const idVeiculo = req.params.id;
  try {
    await veiculo.update(req.body, {
      where:veiculo.idVeiculo={idVeiculo}
    });
    res.status(200);    
    res.json({ message: 'Veiculo atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };
};

const excluirVeiculo = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Use a função findByPk com o ID diretamente
    const vei = await veiculo.findByPk(id);

    if (vei==null) {
      return res.status(404).json({ message: 'Veiculo não encontrado' });
    }

    // Use a função destroy no resultado retornado por findByPk
    await vei.destroy();

    res.status(200);
    res.json({ message: 'Veiculo excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listarVeiculos = async (req, res, next) => {
  try {

    const results = await veiculo.findAll();
    res.json(results);
    res.status(200);

  } catch (error) {
    console.error('Erro ao executar ao obter o veiculo:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o veiculo.' });
  }
};

const obterVeiculoPorId = async (req, res, next) => {
  try {
    const results = await veiculo.findByPk(req.params.id);
    if (!results) {
      res.status(404);
      res.json({ message: 'Veiculo não encontrado.' });
    } else {
      res.status(200);
      res.json(results);
    }
  } catch (error) {
    console.error('Erro ao executar ao obter o Veiculo:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o Veiculo:.' });
  
  }
};

module.exports = {
  consultarVeiculos,
  criarVeiculo,
  atualizarVeivulo,
  excluirVeiculo,
  listarVeiculos,
  obterVeiculoPorId,
};