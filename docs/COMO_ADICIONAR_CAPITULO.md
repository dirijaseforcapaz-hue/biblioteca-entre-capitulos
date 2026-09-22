# Como adicionar um novo capítulo

Você não precisa criar uma nova página manualmente. O site usa um **molde único** para todos os capítulos.

## 1. Duplique o arquivo modelo

Use como referência:

`src/content/capitulos/o-poder-do-habito/01-o-loop-do-habito.md`

Para o capítulo 2, por exemplo, crie:

`src/content/capitulos/o-poder-do-habito/02-o-cerebro-ansioso.md`

## 2. Altere os dados do topo

Os dados entre `---` dizem ao site qual livro, número, título, resumo, mapa e vídeo usar.

Campos mais importantes:

- `bookSlug`: identifica o livro.
- `number`: número do capítulo.
- `title`: título exibido na página.
- `slug`: parte final da URL.
- `summary`: resumo curto usado no topo e no Google.
- `keyIdeas`: três ou mais ideias principais.
- `applications`: exercícios ou aplicações.
- `mapImage`: caminho do mapa visual.
- `videoUrl`: URL do vídeo do YouTube.
- `keywords`: termos importantes relacionados ao capítulo.

## 3. Escreva a análise

Depois do segundo `---`, escreva o conteúdo usando Markdown.

Exemplo:

```md
## Primeira ideia

Texto original da análise...

## Segunda ideia

Texto original da análise...
```

## 4. Adicione o mapa

Salve a imagem em:

`public/images/maps/`

Depois informe o caminho no campo `mapImage`.

## 5. Publique

Quando o arquivo chegar ao GitHub, a Netlify executará uma nova versão do site automaticamente.

A página nascerá no padrão:

`bibliotecaentrecapitulos.com.br/<livro>/<capitulo>`

## Regra editorial

O conteúdo deve ser uma análise original e complementar, evitando grandes reproduções literais da obra.
