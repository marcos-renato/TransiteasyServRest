const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const axios = require('axios');

// Configurar Axios para evitar chamadas de rede durante testes
jest.mock('axios');

// Configurar Enzyme para testes de componentes React
configure({ adapter: new Adapter() });

// Definir variáveis globais, se necessário
global.API_BASE_URL = 'http://localhost:3010/';
