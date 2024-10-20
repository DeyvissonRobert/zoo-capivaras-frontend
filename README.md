# Zoo Capivaras - Frontend
Este projeto é a interface de frontend para a aplicação de gerenciamento de capivaras. Ele permite cadastrar novas capivaras e listar as capivaras existentes através de uma interface web. Este projeto se conecta a uma API RESTful construída com Node.js e MySQL.

## 🔗 Link para o Deploy: 
* Veja a versão ao vivo do projeto aqui:<a href="https://drs-zoo-capivaras.netlify.app/"> Gestão de Capivaras </a>

![tela lilinda salgados](https://github.com/DeyvissonRobert/zoo-capivaras-frontend/blob/main/assets/Zoo%20Capivaras.png)

## Tecnologias Utilizadas
* HTML
* CSS
* JavaScript

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/DeyvissonRobert/zoo-capivaras-frontend.git

2. Naveque até a pasta do projeto: 
    ```sh
    cd zoo-capivaras-frontend

3. Abra o arquivo index.html no seu navegador.

2. O servidor estará disponível em http://localhost:3000

## Funcionalidades
### Home
* Cadastrar Capivara: Formulário para inserir as informações de nome, idade, peso, status de saúde, habitat, comportamento, dieta e observações.
* Listar Capivaras: Exibe a lista de capivaras cadastradas, com opções de deletar, que ao clicar aciona um alerta de confirmação.
* Filtrar Capivaras: A barra de Pesquisa filtra baseado em nome, habitat, ID e idade e etc. atualizando resultados em tempo real.
* Modal de Adicionar Capivara: Exibe um card que pode ser fechado pelo botão "X" ou clicando fora dele.
* Responsividade: Interface adaptável para dispositivos móveis e desktop.

## API Back-End
O link para o repositório do back-end pode ser encontrado  <a href="https://github.com/DeyvissonRobert/zoo-capivaras-backend" > aqui </a>.

## Estrutura do Projeto
```sh
   /
  ├── index.html        # Página principal
  ├── script.js         # Funções JavaScript para interação com a API
  ├── styles.css        # Estilos da página
  └── README.md         # Documentação do projeto



