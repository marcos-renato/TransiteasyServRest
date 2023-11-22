const Sequelize = require('sequelize');
const database = require('../models/db');
const Usuario = require('../models/Usuario');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON

const consultarUsuario = async (req, res) => {
  try {

    const results = await Usuario.findAll({
      where: {
        nome: req.body.nome
      }
    });

    res.json(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar a consulta.' });
  }
};

const criarUsuario = async (req, res, next) => {
  try {
    const data = req.body; // Seu JSON de entrada
    data.dtNascimento = new Date(data.dtNascimento); 
    const newUsuario = await Usuario.create(data);
    res.status(201)
    res.json(newUsuario);

  } catch (error) {
    next(error);
  }
};


const atualizarUsuario = async (req, res, next) => {

  const idUsuario = req.params.id;
  try {
    await Usuario.update(req.body, {
      where:Usuario.idUsuario={idUsuario}
    });
    res.status(200);    
    res.json({ message: 'Usuário atualizado com sucesso.' });
  } catch (error) {
    next(error);
  };
};

const excluirUsuario = async (req, res, next) => {
  const id = req.params.id;

  try {
    // Use a função findByPk com o ID diretamente
    const usuario = await Usuario.findByPk(id);

    if (usuario==null) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }

    // Use a função destroy no resultado retornado por findByPk
    await usuario.destroy();

    res.status(200);
    res.json({ message: 'Usuaário excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listarUsuarios = async (req, res, next) => {
  try {

    const results = await Usuario.findAll();
    res.json(results);
    res.status(200);

  } catch (error) {
    console.error('Erro ao executar ao obter o Usuário:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o Usuário.' });
  }
};

const obterUsuarioPorId = async (req, res, next) => {
  try {
    const results = await Usuario.findByPk(req.params.id);
    if (!results) {
      res.status(404);
      res.json({ message: 'Usuário não encontrado.' });
    } else {
      res.status(200);
      res.json(results);
    }
  } catch (error) {
    console.error('Erro ao executar ao obter o usuário:', error);
    res.status(500);
    res.json({ error: 'Erro ao executar ao obter o usuário.' });
  
  }
};


module.exports = {
  consultarUsuario,
  criarUsuario,
  atualizarUsuario,
  excluirUsuario,
  listarUsuarios,
  obterUsuarioPorId,
};