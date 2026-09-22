# Biblioteca Entre Capítulos

Site editorial da **Biblioteca Entre Capítulos**, criado em Astro para reunir resumos visuais, mapas mentais e análises de livros, capítulo por capítulo.

## O que já existe nesta primeira versão

- Home responsiva
- Página de biblioteca de livros
- Template automático de página de livro
- Template automático de página de capítulo
- Livro piloto: **O Poder do Hábito**
- Capítulo piloto: **O Loop do Hábito**
- Mapa visual original do capítulo
- SEO técnico básico (canonical, Open Graph, sitemap e robots)
- Estrutura preparada para Google Analytics 4
- Configuração pronta para Netlify
- Páginas Sobre e Privacidade
- Página 404

## Rodar localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

O Astro mostrará no terminal o endereço local, normalmente `http://localhost:4321`.

## Publicar na Netlify

1. Suba este projeto para o GitHub.
2. Na Netlify, escolha **Add new site > Import an existing project**.
3. Conecte o repositório.
4. A Netlify deve detectar:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Faça o deploy.
6. Só depois conecte `bibliotecaentrecapitulos.com.br`.

## Adicionar um novo capítulo

Crie um arquivo Markdown dentro de:

`src/content/capitulos/<slug-do-livro>/`

Use o arquivo `01-o-loop-do-habito.md` como modelo. O site gera a página automaticamente.

## Google Analytics

Quando a propriedade GA4 existir, configure na Netlify a variável de ambiente:

`PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

Se a variável estiver vazia, nenhum script do Google Analytics é carregado.

## Próximos passos sugeridos

1. Aprovar o design da página piloto.
2. Inserir a URL real do vídeo do capítulo.
3. Cadastrar os demais capítulos de *O Poder do Hábito*.
4. Conectar Search Console e Analytics.
5. Publicar o domínio definitivo.
6. Depois iniciar *Essencialismo*.

> Este repositório é a base técnica. O conteúdo editorial deve continuar original, analítico e complementar à leitura das obras.
