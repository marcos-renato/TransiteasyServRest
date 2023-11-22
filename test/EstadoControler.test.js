const Estado = require('../src/models/Estado'); // Importe o modelo Estado
const EstadoController = require('../src/controllers/EstadoControler'); // Importe a função a ser testada

describe('Testes para a função excluirEstado', () => {
    it('Deve excluir um estado com sucesso', async () => {
        // Crie um país para testar a exclusão
        const novoEstado = await Estado.create({ nmEstado: 'newEstadoTest', idPais: 5,uf:'NT'});

        // Simule uma solicitação e resposta
        const req = { params: { id: novoEstado.idEstado } };
        const res = {
            status: jest.fn(() => res),
            json: jest.fn(),
        };

        // Chame a função a ser testada
        await EstadoController.excluirEstado(req, res);

        // Verifique se a função foi chamada com os valores esperados
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'Estado excluído com sucesso.' });
    });

    it('Deve retornar um status 404 se o Estado não for encontrado', async () => {
        // Simule uma solicitação para um país inexistente
        const req = { params: { id: 999 } };
        const res = {
            status: jest.fn(() => res),
            json: jest.fn(),
        };

        // Chame a função a ser testada
        await EstadoController.excluirEstado(req, res);

        // Verifique se a função foi chamada com o status 404
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Estado não encontrado' });
    });
});
describe('Testes para a função listarEstados', () => {
    it('Deve verificar se o sistema retorna uma lista de Estados com sucesso', async () => {
      // Simule uma solicitação e resposta
      const req = {};
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
  
      // Chame a função a ser testada
      await EstadoController.listarEstados(req, res);
  
      // Verifique se a função foi chamada com os valores esperados
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
  describe('Testes para a função obterEstadoPorId', () => {
  
  
    it('Deve retornar um status 404 se o Estado não for encontrado', async () => {
      // Simule uma solicitação para um país inexistente
      const req = { params: { id: 999 } };
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
  
      // Chame a função a ser testada
      await EstadoController.obterEstadoPorId(req, res);
  
      // Verifique se a função foi chamada com o status 404
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Estado não encontrado.' });
    });
  });
  