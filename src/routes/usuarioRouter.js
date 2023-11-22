const UsuarioControler = require('../controllers/UsuarioControler')
  module.exports = (app) => {
     app.post('/usuario', UsuarioControler.criarUsuario);
     app.put('/usuario/:id', UsuarioControler.atualizarUsuario);
     app.delete('/usuario/:id', UsuarioControler.excluirUsuario);
     app.get('/usuario', UsuarioControler.listarUsuarios);
     app.get('/usuario/:id', UsuarioControler.obterUsuarioPorId);
  }
  