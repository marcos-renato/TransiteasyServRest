const Sequelize = require('sequelize');
const database = require('../models/db');
const cores = require('../models/Cores');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON


const consultarCores = async (req, res) => {
  try {

    const results = await cores.findAll({
      where: {
        cor: req.body.cor
      }
    });

    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar a consulta.' });
  }
};

const criarCor = async (req, res, next) => {
  try {

    const newCor = await cores.create(req.body);
    res.status(201)
    res.json(newCor);

  } catch (error) {
    next(error);
  }
};


const atualizarCor = async (req, res, next) => {

  const idCor = req.params.id;
  try {
    await cores.update(req.body, {
      where:cores.idCor={idCor}
    });
    res.status(200);    
    res.json({ message: 'Cor atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };
};

const excluirCor = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Use a função findByPk com o ID diretamente
    const cor = await cores.findByPk(id);

    if (cor==null) {
      return res.status(404).json({ message: 'Cor não encontrado' });
    }

    // Use a função destroy no resultado retornado por findByPk
    await cor.destroy();

    res.status(200);
    res.json({ message: 'Cor excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listarCores = async (req, res, next) => {
  try {

    const results = await cores.findAll();
    res.json(results);
    res.status(200);

  } catch (error) {
    console.error('Erro ao executar ao obter as cores:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter as cores.' });
  }
};

const obterCorPorId = async (req, res, next) => {
  try {
    const results = await cores.findByPk(req.params.id);
    if (!results) {
      res.status(404);
      res.json({ message: 'Cor não encontrado.' });
    } else {
      res.status(200);
      res.json(results);
    }
  } catch (error) {
    console.error('Erro ao executar ao obter a cor:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter a cor.' });
  }
};


module.exports = {
  consultarCores,
  criarCor,
  atualizarCor,
  excluirCor,
  listarCores,
  obterCorPorId,
};