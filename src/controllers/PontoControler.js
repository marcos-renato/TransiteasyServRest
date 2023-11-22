const Sequelize = require('sequelize');
const database = require('../models/db');
const ponto = require('../models/Ponto');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON


const consultarPontos = async (req, res) => {
  try {

    const results = await ponto.findAll({
      where: {
        dsPonto: req.body.dsPonto,
      }
    });

    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar a consulta.' });
  }
};

const criarPonto = async (req, res, next) => {
  try {

    const newPonto = await Ponto.create(req.body);
    res.status(201)
    res.json(newPonto);

  } catch (error) {
    next(error);
  }
};


const atualizarPonto = async (req, res, next) => {

  const idPonto = req.params.id;
  try {
    await ponto.update(req.body, {
      where:ponto.idPonto={idPonto}
    });
    res.status(200);    
    res.json({ message: 'Ponto atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };
};

const excluirPonto = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Use a função findByPk com o ID diretamente
    const pontoEncontro = await ponto.findByPk(id);

    if (pontoEncontro==null) {
      return res.status(404).json({ message: 'Ponto de encontro não encontrado' });
    }

    // Use a função destroy no resultado retornado por findByPk
    await pontoEncontro.destroy();

    res.status(200);
    res.json({ message: 'Ponto de encontro excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listarPontos = async (req, res, next) => {
  try {

    const results = await ponto.findAll();
    res.json(results);
    res.status(200);

  } catch (error) {
    console.error('Erro ao executar ao obter o ponto:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o ponto.' });
  }
};

const obterPontoPorId = async (req, res, next) => {
  try {
    const results = await ponto.findByPk(req.params.id);
    if (!results) {
      res.status(404);
      res.json({ message: 'ponto não encontrado.' });
    } else {
      res.status(200);
      res.json(results);
    }
  } catch (error) {
    console.error('Erro ao executar ao obter o ponto:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o ponto.' });
  
  }
};


module.exports = {
  consultarPontos,
  criarPonto,
  atualizarPonto,
  excluirPonto,
  listarPontos,
  obterPontoPorId,
};