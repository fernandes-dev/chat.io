# chat.io

>
>Aplicativo de Chat para estudo de TypeScript e teste de Unidade com Vuejs
>

## Para iniciar o projeto, antes é necessário ter instalado:

- NodeJs
- VueJs
- Yarn

<hr/>

## Instalação utilizando chocolatey e Yarn

<br>

### NodeJs

```
$ choco install nodejs
```
### Yarn

```
$ choco install yarn
```
### Vue CLI Global

```
$ yarn global add @vue/cli
```

## Project setup
```
yarn install
```

### Executar em modo desenvolvimento com hot-reload
```
yarn serve
```

### Compilar e minificar o código para produção
```
yarn build
```

### Executar os testes de unidade
```
yarn test:unit
```

### Executar o lint para verificar a padronização do código
```
yarn lint
```

### Estrutura do Projeto

```shell
 public
  |---img
  |---index.html
 src
  |---assets
  |---components
  |---plugins
  |---router
  |---store
  |---views
  |---App.vue 
  |---Main.ts
  |---RegisterServiceWorker.ts
 tests
 .gitignore
 .prettierrc
 babel.config.ts
 package.json
 tsconfig.js
 vue.config.ts
 yarn.lock
```

> ## public
> 
> Pasta onde fica a index.html, que será manipulada pelo VueJs.

> ## src
> 
> Aqui fica toda a estrutura principal do projeto.


> ## assets
>
> Pasta dedicada para arquivos estáticos, como imagens ou fontes.


> ## components
>
> Cada componente vuejs deve ser colocado nesta pasta.


> ## plugins
>
> Cada plugin ou extensão do vuejs será armazenado nesta pasta, como o vuetify, por exemplo.


> ## router
>
> Nesta pasta temos o arquivo index.ts que é responsável por mapear todas as rotas e direcioná-las para um componente vuejs específico.


> ## store
>
> Esta pasta armazena toda Loja do Vue, o vuex. Este plugin eleva a capacidade do Vuejs, se tratando da reatividade, no qual podemos compartilhar estados totalmente reativos entre todos os componentes, além de funções que nós mesmos definimos.


> ## views
>
> As views são as principais camadas de renderização dos componentes vuejs e devem ser armazenadas nesta pasta.


> ## tests
>
> Os testes de unidade podem ser armazenados nesta pasta, cada um representando um componente vuejs que será testado.


> ## .gitignore
>
> Configuração sobre quais arquios o git deve ignorar no versionamento.


> ## .prettierrc
>
> Configuração do prettier, sobre como o código deve ser padronizado.


> ## babel.config.ts
>
> O babel é responsável por transpilar o vuejs para arquivos que o navegador entende. Aqui você pode configurá-lo da maneira que desejar.


> ## package.json
>
> Arquivo responsável por armazenar a lista de dependências, as versões, scripts de manipulação, dentre outras características relacionadas ao projeto.


> ## tsconfig.json
>
> Arquivo dedicado para as configurações relacionadas ao TypeScript e como ele será utilizado em conjunto ao Vuejs


> ## vue.config.ts
>
> As configurações sobre os plugins e o próprio VueJs, e como devem ser comportar, podem ser definidas neste arquivo.

