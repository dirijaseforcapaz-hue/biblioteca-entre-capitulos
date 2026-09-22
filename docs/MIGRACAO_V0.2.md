# Como atualizar o site atual para a v0.2

A forma mais simples é substituir no GitHub os arquivos da versão anterior pelos arquivos deste pacote.

## Arquivos principais alterados

- `package.json`
- `.env.example`
- `README.md`
- `src/content.config.ts`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/components/BaseHead.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/BookCard.astro`
- `src/components/ChapterCard.astro`
- `src/pages/index.astro`
- `src/pages/livros/index.astro`
- `src/pages/livros/[slug].astro`
- `src/pages/[livro]/[capitulo].astro`
- `src/pages/robots.txt.ts`
- `src/pages/sitemap.xml.ts`
- `src/content/livros/o-poder-do-habito.md`
- `src/content/capitulos/o-poder-do-habito/01-o-loop-do-habito.md`

## Depois do upload

A Netlify deve detectar o commit e gerar um novo deploy automaticamente.

No painel da Netlify, configure a variável de ambiente:

`PUBLIC_SITE_ENV=staging`

Mantenha esse valor enquanto estiver usando apenas o domínio temporário `*.netlify.app`.

Quando o domínio definitivo estiver conectado e você estiver pronto para aparecer no Google, troque para:

`PUBLIC_SITE_ENV=production`

Depois faça um novo deploy.
