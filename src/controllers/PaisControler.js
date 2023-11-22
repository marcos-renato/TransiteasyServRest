
const Pais = require('../models/Pais');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON


const consultarPaises = async (req, res) => {
  try {

    const results = await Pais.findAll({
      where: {
        nmPais: req.body.nmPais
      }
    });

    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar a consulta.' });
  }
};

const criarPais = async (req, res, next) => {
  try {

    const newPais = await Pais.create(req.body);
    res.status(201)
    res.json(newPais);

  } catch (error) {
    next(error);
  }
};


const atualizarPais = async (req, res, next) => {

  const idPais = req.params.id;
  try {
    await Pais.update(req.body, {
      where:Pais.idPais={idPais}
    });
    res.status(200);    
    res.json({ message: 'País atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };
};

const excluirPais = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Use a função findByPk com o ID diretamente
    const pais = await Pais.findByPk(id);

    if (pais==null) {
      return res.status(404).json({ message: 'País não encontrado' });
    }

    // Use a função destroy no resultado retornado por findByPk
    await pais.destroy();

    res.status(200);
    res.json({ message: 'País excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listarPaises = async (req, res, next) => {
  try {

    const results = await Pais.findAll();
    res.json(results);
    res.status(200);

  } catch (error) {
    console.error('Erro ao executar ao obter o país:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o país.' });
  }
};

const obterPaisPorId = async (req, res, next) => {
  try {
    const results = await Pais.findByPk(req.params.id);
    if (!results) {
      res.status(404);
      res.json({ message: 'País não encontrado.' });
    } else {
      res.status(200);
      res.json(results);
    }
  } catch (error) {
    console.error('Erro ao executar ao obter o país:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o país:.' });
  
  }
};


module.exports = {
  consultarPaises,
  criarPais,
  atualizarPais,
  excluirPais,
  listarPaises,
  obterPaisPorId,
};