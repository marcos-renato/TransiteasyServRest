const Pais = require('../src/models/Pais'); // Importe o modelo Pais
const PaisController = require('../src/controllers/PaisControler'); // Importe a função a ser testada


describe('Testes para a função excluirPais', () => {
  it('Deve excluir um país com sucesso', async () => {
    // Crie um país para testar a exclusão
    const novoPais = await Pais.create({ nmPais: 'newPaisTest', snAtivo: 'S' });

    // Simule uma solicitação e resposta
    const req = { params: { id: novoPais.idPais } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await PaisController.excluirPais(req, res);

    // Verifique se a função foi chamada com os valores esperados
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'País excluído com sucesso.' });
  });


  it('Deve retornar um status 404 se o país não for encontrado', async () => {
    // Simule uma solicitação para um país inexistente
    const req = { params: { id: 999 } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await PaisController.excluirPais(req, res);

    // Verifique se a função foi chamada com o status 404
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'País não encontrado' });
  });

});

describe('Testes para a função listarPaises', () => {
  it('Deve verificar se o sistema retorna uma lista de países com sucesso', async () => {
    // Simule uma solicitação e resposta
    const req = {};
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await PaisController.listarPaises(req, res);

    // Verifique se a função foi chamada com os valores esperados
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
describe('Testes para a função obterPaisPorId', () => {


  it('Deve retornar um status 404 se o país não for encontrado', async () => {
    // Simule uma solicitação para um país inexistente
    const req = { params: { id: 999 } };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await PaisController.obterPaisPorId(req, res);

    // Verifique se a função foi chamada com o status 404
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'País não encontrado.' });
  });
});
