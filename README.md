# Biblioteca Entre Capítulos

Versão **0.2.0** do site editorial da Biblioteca Entre Capítulos, criada em Astro para reunir análises, resumos visuais, mapas mentais e episódios de livros, capítulo por capítulo.

## O que mudou na v0.2

- Home redesenhada para mostrar o produto real, não apenas uma apresentação institucional.
- Progresso das coleções: capítulos publicados x total do livro.
- Página de livro com roteiro completo, capítulos publicados e próximos capítulos.
- Template de capítulo universal: nenhum conceito específico de um livro fica preso ao layout.
- Seções opcionais e condicionais: conceito, exemplo, aplicações, mapa, vídeo e recursos premium só aparecem quando existem dados.
- Página de capítulo com navegação interna, tempo de leitura, ideias principais, análise editorial e conexão com o restante do livro.
- Vídeo deixa de exibir placeholder quando ainda não existe URL.
- Estrutura para afiliados e mapas premium sem exibir CTAs vazios.
- SEO aprimorado, sitemap XML real e metadados sociais.
- Staging protegido contra indexação por padrão.
- Identidade visual editorial reforçada e melhorias específicas para celular.

## Rodar localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

## Publicar na Netlify

A configuração já está em `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: 22

### Importante: staging x produção

A v0.2 usa a variável:

`PUBLIC_SITE_ENV`

Enquanto o site estiver apenas no endereço temporário da Netlify, deixe:

`PUBLIC_SITE_ENV=staging`

Nesse modo, as páginas recebem `noindex` e o `robots.txt` bloqueia rastreamento.

Somente depois de conectar o domínio definitivo `bibliotecaentrecapitulos.com.br`, altere para:

`PUBLIC_SITE_ENV=production`

## Google Analytics

Quando a propriedade GA4 existir, configure na Netlify:

`PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

Se a variável estiver vazia, nenhum script do Google Analytics é carregado.

## Adicionar um capítulo

Consulte `docs/COMO_ADICIONAR_CAPITULO.md`. A página é gerada a partir do conteúdo, e cada seção pode ser ligada ou desligada apenas adicionando ou omitindo campos no arquivo Markdown.

## Regra editorial

O conteúdo deve ser original, analítico e complementar às obras. A Biblioteca Entre Capítulos não deve reproduzir extensamente o texto dos livros nem se apresentar como substituta da leitura original.
