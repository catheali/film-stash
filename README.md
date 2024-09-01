# Film Stash

Film Stash é uma aplicação web desenvolvida em Vue 3 e TypeScript que permite aos usuários explorar filmes populares e obter detalhes sobre cada um deles. Os dados dos filmes são fornecidos pela API TMDB (The Movie Database).

## Funcionalidades

- **Página Inicial**: Exibe os filmes mais bem avaliados.
- **Detalhes do Filme**: Ao clicar em um card de filme na página inicial, o usuário é redirecionado para uma página com detalhes do filme, incluindo:
  - Título
  - Imagem (poster)
  - Resumo do filme
  - Gêneros
  - Data de lançamento
  - Receita
- **Favoritos**: Na página de detalhes do filme, é possível adicionar o filme à lista de favoritos. A lista de favoritos é gerenciada na store da aplicação, e você pode:
  - **Adicionar Filme aos Favoritos**: Salve filmes que você deseja rever ou manter em uma lista especial.
  - **Remover Todos os Favoritos**: Exclua todos os itens da lista de favoritos com um único clique.

## Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript para construção da interface do usuário.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **SaSS**: Pré-processador CSS para estilização.
- **Vuex**: Gerenciamento de estado.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **TMDB API**: Provedor de dados dos filmes.

## Estrutura de Pastas

```bash
src/
├── assets/         # Arquivos de imagem, fontes, etc.
├── components/     # Componentes Vue reutilizáveis
├── router/         # Configuração de rotas
├── services/       # Configuração da API
├── store/          # Gerenciamento de estado com Vuex
├── types/          # Gerenciamento de Tipos do Typescript
├── views/          # Páginas da aplicação
```

## Configuração do Projeto

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- Vue CLI instalada

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/catheali/film-stash.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd film-stash
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione a sua chave Bearer Token da API do TMDB:

   ```bash
   VITE_APP_API_BEARER=your_api_bearer_token_here
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse a aplicação em `http://localhost:5173`.

## Variáveis de Ambiente

Certifique-se de configurar as seguintes variáveis de ambiente no arquivo `.env`:

```env
   VITE_APP_API_BEARER=your_api_bearer_token_here
```

## Como Usar

- **Explorar Filmes**: Na página inicial, você verá uma lista dos filmes mais bem avaliados. 
- **Ver Detalhes do Filme**: Clique em qualquer card de filme para ver informações detalhadas sobre ele.
- **Gerenciar Favoritos**: Na página de detalhes do filme, você pode adicionar o filme aos favoritos. Para remover todos os favoritos, use a opção disponível na lista de favoritos.

## Agradecimentos

- **TMDB**: Obrigada pela incrível API de filmes que torna este projeto possível.