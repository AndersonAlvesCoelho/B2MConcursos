## Estrutura de arquivos Front end

- **src**
   - App.js | Inicialização do App, onde é feito o loading de fontes, reducer e navegação.
   - global.css ou .js | uma arquivo de estilização para o projeto todo
   - Routes.js | Arquivo de definição de navegação do app.
   * **actions** | São fontes de informações que são enviadas da aplicação para a Store.
   * **assets** | Pasta de mídia do projeto.
      * **css** | Arquivos de estilização. 
      * **imagens** | Arquivos de midas .png .jpg .ico 
      * **fonts** | Arquivos de fonts
   * **components** | Contém os componentes e trechos de códigos reutilizados em outras telas.
      - Cards.js | Componentes do Tipo cards.
      - Forms.js | Components utilizados em formulários.
      - Footer.js | Components utilizados do rodapé.
      - Header.js | Componentes do tipo menu.
      - Modal.js | Componentes do tipo modal.
      - Utils.js | Trechos de código reutilizaveis.
      - ...
   * **constants** | Contém dados constantes de definição ou configuração do app.
   * **help** | Componentes auxiliarem, como um select padrão para UF's
   * **pages** | Pasta o que contém todos os arquivos de telas.
      * **quest** | Pasta que contem os arquivos para visulizar/filtrar de qeustões.
         - CommitStudent.js | Comentarios dos alunos
         - CommitStudent.js | Comentarios do professor 
         - FilterQuest.js | Filtrar questões
         - Quest.js | Visualizar questões.
      * **registerQuest** | Pasta que contem os arquivos para visulizar/filtrar de qeustões.
         - ExtractPDF.js | Extrair texto do PDF 
         - Formulario.js | Formulario de cadastro.
   * **reducers** | Recebem e tratam as informações para que sejam ou não enviadas à Store.
   * **services** | Contém funções de conexão e autenticação.
   * **utils** | Trechos de código reutilizaveis.