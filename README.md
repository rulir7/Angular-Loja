# Projeto de Loja Online em Angular

O projeto foi realizado com [Angular CLI](https://github.com/angular/angular-cli) versão 14.2.13. Durante a trilha de ensino em Java, no programa Start da empresa Capgemini.

## Servidor de Desenvolvimento

Execute ng serve para iniciar um servidor de desenvolvimento. Navegue para http://localhost:4200/. O aplicativo será recarregado automaticamente se você fizer qualquer alteração nos arquivos de origem.

## Criação de código

Execute ng generate component nome-componente para gerar um novo componente. Você também pode usar ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build

Execute ng build para construir o projeto. Os artefatos de construção serão armazenados no diretório dist/.

## Executando testes unitários

Execute ng test para executar os testes unitários usando o [Karma](https://karma-runner.github.io).

## Executando testes de ponta a ponta

Execute ng e2e para executar os testes de ponta a ponta usando uma plataforma de sua escolha. Antes de usar esse comando, você precisa adicionar um pacote que implemente funcionalidades de teste de ponta a ponta.

## Ajuda adicional

Para obter mais ajuda sobre o Angular CLI, use ng help ou consulte a página de [Visão geral e Referência de Comandos do Angular CLI](https://angular.io/cli).

## Como gerar o build para pages do github USUARIO = user do github DIRETORIO = local

ng build --base-href="https://USUARIO.github.io/DIRETORIO/" --output-path DIRETORIO
