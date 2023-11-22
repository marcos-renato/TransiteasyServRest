const Sequelize = require('sequelize');
const database = require('../models/db');
const Estado = require('../models/Estado');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON


const consultarEstado = async (req, res) => {
  try {

    const results = await Estado.findAll({
      where: {
        nmEstado: req.body.nmEstado
      }
    });

    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500).json({ error: 'Erro ao executar a consulta.' });
  }
};

const criarEstado = async (req, res, next) => {
  try {

    const newEstado = await Estado.create(req.body);
    res.status(201).json(newEstado);

  } catch (error) {
    next(error);
  }
};


const atualizarEstado = async (req, res, next) => {

  const idEstado = req.params.id;
  try {
    await Estado.update(req.body, {
      where:Estado.idEstado={idEstado}
    });
    res.status(200).json({ message: 'Estado atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };
};

const excluirEstado = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Use a função findByPk com o ID diretamente
    const estado = await Estado.findByPk(id);

    if (!estado) {
      return res.status(404).json({ message: 'Estado não encontrado' });
    }

    // Use a função destroy no resultado retornado por findByPk
    await estado.destroy();

    res.status(200).json({ message: 'Estado excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listarEstados = async (req, res, next) => {
  try {

    const results = await Estado.findAll();
    res.json(results);
    res.status(200);

  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500).json({ error: 'Erro ao executar ao listar os Estados.' });
  }
};

const obterEstadoPorId = async (req, res, next) => {
  try {

    const results = await Estado.findByPk(req.params.id);

    if (!results) {
      res.status(404);
      res.json({ message: 'Estado não encontrado.' });
    } else {
      res.status(200);
      res.json(results);
    }

  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500).json({ error: 'Erro ao executar ao listar os Estados.' });
  }
};

module.exports = {
  consultarEstado,
  criarEstado,
  atualizarEstado,
  excluirEstado,
  listarEstados,
  obterEstadoPorId,
};