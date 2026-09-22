# Contexto para continuar o projeto em outro chat

## Projeto

Nome do canal: **Entre Capítulos**

Nome do site: **Biblioteca Entre Capítulos**

Domínio definitivo planejado: **bibliotecaentrecapitulos.com.br**

URL de staging usada durante o desenvolvimento: domínio temporário da Netlify.

Objetivo: transformar os episódios do canal em uma biblioteca visual e indexável de livros, com uma página para cada livro e uma página para cada capítulo.

## Tecnologia

- Astro
- TypeScript
- GitHub para versionamento
- Netlify para hospedagem e deploy
- Google Analytics 4 para comportamento
- Google Search Console para SEO
- Futuramente: afiliados, produtos, AdSense e membros

## Estado atual

A versão técnica atual é **v0.2**.

Ela inclui:

- home editorial redesenhada;
- progresso das coleções;
- página de livro com roteiro completo;
- template universal de capítulo;
- seções condicionais;
- navegação interna no capítulo;
- estrutura de mapa, vídeo, afiliados e premium;
- SEO e sitemap XML;
- staging com `noindex` por padrão;
- melhorias mobile.

## Arquitetura editorial

Cada livro é cadastrado em `src/content/livros/`.

Cada capítulo é cadastrado em `src/content/capitulos/`.

O layout do capítulo não deve conter conceitos específicos de um livro. Todo conteúdo variável deve vir do arquivo do capítulo.

## Primeira coleção

Livro: **O Poder do Hábito**, de Charles Duhigg.

A coleção possui roteiro de 9 capítulos. O primeiro capítulo publicado é **O Loop do Hábito**.

## Regra de staging

Enquanto o site estiver somente no endereço temporário da Netlify:

`PUBLIC_SITE_ENV=staging`

Somente depois de conectar o domínio definitivo e decidir liberar indexação:

`PUBLIC_SITE_ENV=production`

## Próximos passos

1. Subir os arquivos da v0.2 no GitHub.
2. Confirmar o deploy automático da Netlify.
3. Revisar a v0.2 em desktop e celular reais.
4. Ajustar detalhes visuais encontrados no site publicado.
5. Cadastrar os capítulos 2 a 9 de O Poder do Hábito.
6. Conectar domínio, GA4 e Search Console quando a coleção estiver pronta para divulgação.
