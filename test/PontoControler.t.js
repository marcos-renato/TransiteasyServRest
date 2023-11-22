const Ponto = require('../src/models/Ponto'); // Importe o modelo Pais
const PontoController = require('../src/controllers/PontoControler'); // Importe a função a ser testada


/*describe('Testes para a função excluirPonto', () => {
  it('Deve excluir uma Ponto com sucesso', async () => {
    // Crie um ponto para testar a exclusão
    const novoPonto = await Ponto.create({ nmPonto: 'newPontoTest', snAtivo: 'S' });

    // Simule uma solicitação e resposta
    const req = { params: { id: novoPonto.idPonto } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await PontoController.excluirPonto(req, res);

    // Verifique se a função foi chamada com os valores esperados
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Ponto de Encontro excluído com sucesso.' });
  });


  it('Deve retornar um status 404 se o ponto de encontro não for encontrado', async () => {
    // Simule uma solicitação para um ponto inexistente
    const req = { params: { id: 999 } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await PontoController.excluirPonto(req, res);

    // Verifique se a função foi chamada com o status 404
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Ponto não encontrado' });
  });

});

describe('Testes para a função listarPontos', () => {
  it('Deve verificar se o sistema retorna uma lista de pontos de encontros com sucesso', async () => {
    // Simule uma solicitação e resposta
    const req = {};
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await PontoController.listarPontos(req, res);

    // Verifique se a função foi chamada com os valores esperados
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
describe('Testes para a função obterPontoPorId', () => {


  it('Deve retornar um status 404 se o Ponto não for encontrado', async () => {
    // Simule uma solicitação para um ponto inexistente
    const req = { params: { id: 999 } };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await PontoController.obterPontoPorId(req, res);

    // Verifique se a função foi chamada com o status 404
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Ponto não encontrado.' });
  });
});*/
