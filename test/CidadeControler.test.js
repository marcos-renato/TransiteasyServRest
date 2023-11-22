const Cidade = require('../src/models/Cidade'); // Importe o modelo Cidade
const cidadeControler = require('../src/controllers/CidadeControler'); // Importe a função a ser testada


describe('Testes para a função excluirCidade', () => {
  it('Deve excluir uma cidade com sucesso', async () => {
    // Crie um cidade para testar a exclusão
    const novaCidade = await Cidade.create({ nmCidade: 'newCidadeTest', snAtivo: 'S',idEstado:2 });

    // Simule uma solicitação e resposta
    const req = { params: { id: novaCidade.idCidade } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await cidadeControler.excluirCidade(req, res);

    // Verifique se a função foi chamada com os valores esperados
    expect(res.status).toHaveBeenCalledWith(200);
    //expect(res.json).toHaveBeenCalledWith({ message:'Cidade excluída com sucesso.'});
  });


  it('Deve retornar um status 404 se a cidade não for encontrado', async () => {
    // Simule uma solicitação para uma cidade inexistente
    const req = { params: { id: 999 } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await cidadeControler.excluirCidade(req, res);

    // Verifique se a função foi chamada com o status 404
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Cidade não encontrado' });
  });

});

describe('Testes para a função listarCidades', () => {
  it('Deve verificar se o sistema retorna uma lista de cidade com sucesso', async () => {
    // Simule uma solicitação e resposta
    const req = {};
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await cidadeControler.listarCidades(req, res);

    // Verifique se a função foi chamada com os valores esperados
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
describe('Testes para a função obterCidadePorId', () => {
  it('Deve retornar um status 404 se a cidade não for encontrado', async () => {
    // Simule uma solicitação para uma cidade inexistente
    const req = { params: { id: 999 } };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    // Chame a função a ser testada
    await cidadeControler.obterCidadePorId(req, res);

    // Verifique se a função foi chamada com o status 404
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Cidade não encontrado.' });
  });
});
