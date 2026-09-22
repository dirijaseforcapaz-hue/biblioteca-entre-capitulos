# Como colocar a primeira versão no ar

Este guia foi escrito para quem não trabalha com desenvolvimento.

## Parte 1 - colocar os arquivos no GitHub

O repositório já existe: `biblioteca-entre-capitulos`.

### Opção mais simples em um computador

1. Baixe o arquivo ZIP entregue pelo ChatGPT.
2. Extraia o ZIP no computador.
3. Abra o repositório no GitHub.
4. Clique em **Add file** e depois **Upload files**.
5. Arraste o conteúdo da pasta extraída para a área de upload.
6. Aguarde os arquivos terminarem de carregar.
7. No campo de mensagem, escreva: `feat: primeira versão da Biblioteca Entre Capítulos`.
8. Confirme o commit na branch `main`.

> Importante: envie **o conteúdo da pasta**, de modo que `package.json`, `src`, `public` e `netlify.toml` fiquem na raiz do repositório.

## Parte 2 - conectar à Netlify

1. Entre na Netlify.
2. Escolha **Add new site**.
3. Escolha **Import an existing project**.
4. Selecione GitHub.
5. Escolha o repositório `biblioteca-entre-capitulos`.
6. Confirme as configurações:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Clique em Deploy.

A Netlify instalará o Astro e construirá o site.

## Parte 3 - primeiro teste

A Netlify criará um endereço temporário parecido com:

`nome-do-site.netlify.app`

Antes de conectar o domínio definitivo, abra esse endereço no computador e no celular e teste:

- página inicial;
- menu;
- página Livros;
- O Poder do Hábito;
- O Loop do Hábito;
- mapa em tela cheia;
- links de navegação;
- página Sobre;
- página Privacidade.

## Parte 4 - domínio

Somente depois de aprovar a primeira versão, conecte:

`bibliotecaentrecapitulos.com.br`

A Netlify mostrará os registros DNS que devem ser configurados no local onde o domínio foi registrado.

## Parte 5 - Google Analytics

Não configure antes de termos a primeira versão publicada.

Depois criaremos a propriedade GA4 e adicionaremos na Netlify a variável:

`PUBLIC_GA_MEASUREMENT_ID`

O código já está preparado para isso.

## Se algo der errado

Não tente reconstruir o projeto sozinho. Guarde a mensagem de erro da Netlify ou uma captura de tela e envie em uma conversa do projeto. O erro poderá ser diagnosticado a partir do repositório e dos logs de deploy.
