    const express = require('express');
    const cors = require('cors');
    const app = express();
    const PORT = 3010;
 

    app.use(cors());
    /*app.use(cors({
      origin: 'http://seusite.com', // Substitua pela origem permitida
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
      credentials: true, // Define se as credenciais (cookies, autenticação) devem ser enviadas
    }));*/
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.listen(PORT, function() {
       console.log('server initialized ' + PORT);
    });
  
    require('../transiteasyServRest/src/routes/index')(app);
    