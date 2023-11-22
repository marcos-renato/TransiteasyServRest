const Sequelize = require('sequelize');
const database = require('../models/db');
const Cidade = require('../models/Cidade');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON


const consultarCidades = async (req, res) => {
  try {

    const results = await Cidade.findAll({
      where: {
        nmCidades: req.body.nmCidades
      }
    });

    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar a consulta.' });
  }
};

const criarCidade = async (req, res, next) => {
  try {

    const newCidade = await Cidade.create(req.body);
    res.status(201)
    res.json(newCidade);

  } catch (error) {
    next(error);
  }
};


const atualizarCidade = async (req, res, next) => {

  const idCidade = req.params.id;
  try {
    await Cidade.update(req.body, {
      where:Cidade.idCidade={idCidade}
    });
    res.status(200);    
    res.json({ message: 'Cidade atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };
};

const excluirCidade = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Use a função findByPk com o ID diretamente
    const cidade = await Cidade.findByPk(id);

    if (cidade==null) {
      return res.status(404).json({ message: 'Cidade não encontrado' });
    }

    // Use a função destroy no resultado retornado por findByPk
    await cidade.destroy();
    res.json({ message: 'Cidade excluído com sucesso.' });
    res.status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listarCidades = async (req, res, next) => {
  try {

    const results = await Cidade.findAll();
    res.json(results);
    res.status(200);

  } catch (error) {
    console.error('Erro ao executar ao obter o cidade:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o cidade.' });
  }
};

const obterCidadePorId = async (req, res, next) => {
  try {
    const results = await Cidade.findByPk(req.params.id);
    if (!results) {
      res.status(404);
      res.json({ message: 'Cidade não encontrado.' });
    } else {
      res.status(200);
      res.json(results);
    }
  } catch (error) {
    console.error('Erro ao executar ao obter a cidade:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter a cidade.' });
  
  }
};


module.exports = {
  consultarCidades,
  criarCidade,
  atualizarCidade,
  excluirCidade,
  listarCidades,
  obterCidadePorId,
};