const Sequelize = require('sequelize');
const database = require('../models/db');
const TipoDeVeiculos = require('../models/TipoDeVeiculos');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON


const consultarTipoVeiculos = async (req, res) => {
  try {

    const results = await TipoDeVeiculos.findAll({
      where: {
        nrVagas: req.body.nrVagas
      }
    });

    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar a consulta.' });
  }
};

const criarTipoDeVeiculo = async (req, res, next) => {
  try {

    const newTipoDeveiuclo = await TipoDeVeiculos.create(req.body);
    res.status(201)
    res.json(newTipoDeveiuclo);

  } catch (error) {
    next(error);
  }
};


const atualizarTipoDeVeiculo = async (req, res, next) => {

  const idTipoVeiculo = req.params.id;
  try {
    await TipoDeVeiculos.update(req.body, {
      where:TipoDeVeiculos.idTipoVeiculo={idTipoVeiculo}
    });
    res.status(200);    
    res.json({ message: 'Tipo de veiculo atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };
};

const excluirTipoVeiculo = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Use a função findByPk com o ID diretamente
    const tipoveiculos = await TipoDeVeiculos.findByPk(id);

    if (tipoveiculos==null) {
      return res.status(404).json({ message: 'Tipo de veiculo não encontrado' });
    }

    // Use a função destroy no resultado retornado por findByPk
    await tipoveiculos.destroy();

    res.status(200);
    res.json({ message: 'Tipo de veiculo excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listarTipoVeiculos = async (req, res, next) => {
  try {

    const results = await TipoDeVeiculos.findAll();
    res.json(results);
    res.status(200);

  } catch (error) {
    console.error('Erro ao executar ao obter o tipo de veiculo:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o tipo de veiculo.' });
  }
};

const obterTipoDeVeiculoPorId = async (req, res, next) => {
  try {
    const results = await TipoDeVeiculos.findByPk(req.params.id);
    if (!results) {
      res.status(404);
      res.json({ message: 'Tipo de veiculo não encontrado.' });
    } else {
      res.status(200);
      res.json(results);
    }
  } catch (error) {
    console.error('Erro ao executar ao obter o tipo de veiculo:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o tipo de veiculo.' });
  
  }
};


module.exports = {
  consultarTipoVeiculos,
  criarTipoDeVeiculo,
  atualizarTipoDeVeiculo,
  excluirTipoVeiculo,
  listarTipoVeiculos,
  obterTipoDeVeiculoPorId,
};