**MJV-Back-end - Full Stack ** Escolhei as seguintes funcionalidades para realizar o teste:
* Menu de Categorias
* Lista de Produtos(Vitrine)
* Busca de Produtos
* Cadastro de Usuário
* Login
* Paginação

**Requisitos para rodar a aplicação no local sem docker
* MylServer 5.7+
* Node 10+


**Instruções para rodar a aplicação no local

* Clone o repositório

**COM DOCKER:
* Caso tenha o docker e docker-compose em sua máquina, basta entrar no pasta raiz do projeto e executar o comando npm install, após isto execute o comando docker-compose up -d, após o docker gerar as imagens do mysql e da API, aguarde 30 segundos para os dois estarem sincronizados e execute o comando *npm run populateDatabase*.

**SEM DOCKER:
* Execute o comando npm install
* A partir da pasta raiz do projeto, entre no arquivo database>sequelize.js e altere as credenciais para as do seu banco de dados, onde estiver escrito: "new Sequelize(DB, 'root', null)", altera para "new Sequelize(DB, 'usuariodoseubanco', 'senhadoseubanco')" e salve o arquivo.
* Crie um database no seu mysql chamado mjv.
* Execute o comando *npm run populateDatabase*.
* Execute o comando *npm start*.
