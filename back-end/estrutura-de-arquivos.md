## Estrutura de arquivos Back End

- .env | Arquivo de constantes.
- **src**
   - config.js | Arquivo de configuração de porta da url
   - routes.js | Arquivo de definição de navegação do app.
   - server |Arquivo de onecção com o servidor.
   * **config** | Credencias de acessos ao banco de dados.
    - database 
   * **controllers** | Pasta com as controlles.
   * **database** | Arquivo de migrações de tabelas do banco de dados.
   * **helpers** | Funções axuliar, como time data.
   * **help** são componentes auxiliarem, como um select padrão para UF's
   * **middlewares** | Pasta com o arquivo de verificações de autenticação por token.
   * **models** | Arquivo com as models das tabelas do banco de dados.