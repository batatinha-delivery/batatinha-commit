# Pipelines

## Documentation

O projeto utiliza a pipeline padrão do docusaurus para fazer o deploy no githubPages.
A secret já estará configurada na organização, mas para configurar algo diferente, basta seguir o seguinte tutorial: https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions

### Deploy key

Criar deploy key dentro do projeto (com permissão de escrita.): https://docs.github.com/pt/developers/overview/managing-deploy-keys.

### Secrets

- **GH_PAGES_DEPLOY**: Chave privada para permitir o deploy da aplicação. Para gerar e configurar, basta seguir o tutorial em https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions

## Publish

### Secrets

As secrets estarão configuradas na organização, não necessitando configurar isso em cada projeto.

- **NPM_DEPLOY_TOKEN**: Token de deploy do NPM com permissão "Publish": https://docs.npmjs.com/creating-and-viewing-access-tokens
- **PAT_GITHUB**: Criar um Private Access Token para o usuário: https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
