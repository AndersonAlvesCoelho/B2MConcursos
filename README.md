> 💡 Tecnologias utilizadas no projeto:

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="20" src="https://cdn.iconscout.com/icon/free/png-512/postgresql-226047.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>
<code><img height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png"></code>
<code><img height="20" src="https://pbs.twimg.com/profile_images/1091817101738864640/eQpWLr2c_400x400.jpg"></code>

<div align="center">
<h3><img height="20" src="https://image.flaticon.com/icons/png/512/18/18436.png"> B2MConcursos 1.0</h3>
</div>

## 💡 Sobre o Projeto

...

### Requerimentos

- [Node.js](https://nodejs.org/en/download/) ou [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

## 💻 Iniciar o projeto

#### 🔖 Front-end

```bash
    # Clone Repository
    git clone https://github.com/AndersonAlvesCoelho/B2MConcursos

    #Acesse um diretório do front-end
    cd B2MConcursos\front-end
    #Logo após, instale as dependências necessárias
    yarn  ou npm i
    #Por fim, start o projeto
    yarn start ou npm start
```

#### 📦 Backend

```bash
    #Acesse um diretório do back-end
    cd B2MConcursos\back-end
    #Logo após, instale as dependências necessárias
    npm i ou yarn
    #Por fim, iniciar a api
    npm dev ou yarn dev


    #MIGRATIONS
    #roda todas as migrations pendentes
    npx knex migrate:latest

    #reverte todas as tabelas criadas
    npx npx knex migrate:rollback --all

    #SEEDS
    #roda todas as seeds pedentes
    knex seed:run

    #rodar somente uma seed específica

```

> Pronto, seu backend já está inicializado. Você pode ver os dados da migration pela [url](http://localhost:3333/) ou pelo [insomnia](https://insomnia.rest/download/)
> http://localhost:3333/
