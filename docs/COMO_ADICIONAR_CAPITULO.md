# Como adicionar um novo capítulo — v0.2

A v0.2 usa um template universal. Você não cria uma página nova manualmente: cria um arquivo de conteúdo, e o site monta a página automaticamente.

## 1. Duplique um capítulo existente

Use como referência:

`src/content/capitulos/o-poder-do-habito/01-o-loop-do-habito.md`

Para o capítulo 2, por exemplo:

`src/content/capitulos/o-poder-do-habito/02-o-cerebro-ansioso.md`

## 2. Campos obrigatórios

- `bookSlug`: identifica o livro.
- `number`: número do capítulo.
- `title`: título da página.
- `slug`: parte final da URL.
- `kicker`: frase curta abaixo do título.
- `takeaway`: ideia do capítulo em uma frase.
- `summary`: descrição usada no site e nos metadados.
- `readingMinutes`: estimativa de leitura.
- `publishedAt`: data de publicação.

## 3. Seções opcionais

A grande mudança da v0.2 é que o layout não contém mais conteúdo específico de O Loop do Hábito. Você pode ligar ou desligar seções apenas preenchendo os dados.

### Conceito central

Use `concept` quando houver um modelo, processo ou conjunto de ideias que merece destaque visual.

`layout: flow` cria uma sequência com setas.

`layout: cards` cria blocos independentes.

### Ideias principais

Use `keyIdeas` para os pontos que o leitor deve guardar.

### Exemplo ou caso

Use `caseStudy` para um exemplo original, caso analisado ou situação que ajude a enxergar o conceito.

### Por que isso importa

Use `whyItMatters` para a interpretação editorial do Entre Capítulos.

### Conexão com o livro

Use `bookConnection` para explicar como aquele capítulo se liga ao argumento maior da obra.

### Aplicação prática

Use `applications` para perguntas, exercícios ou pequenos experimentos.

### Mapa

Use `mapImage`. Se houver arquivo para download, adicione `mapDownloadUrl`. No futuro, `premiumUrl` e `premiumLabel` podem apontar para um benefício de membros.

### Vídeo

Adicione `videoUrl` somente quando o episódio já estiver publicado. Se o campo for omitido, a seção de vídeo não aparece.

## 4. Texto da análise

Depois do segundo `---`, escreva a análise em Markdown. O ideal é que o texto tenha voz própria, organize ideias e conecte o capítulo ao restante da obra.

## 5. Atualize o roteiro do livro

O roteiro completo fica no arquivo do livro, por exemplo:

`src/content/livros/o-poder-do-habito.md`

O campo `chapterOutline` pode listar capítulos que ainda não foram publicados. A página do livro mostra automaticamente quais estão disponíveis e quais estão em preparação.

## 6. Publicação

Depois que o arquivo chegar ao GitHub, a Netlify dispara um novo deploy automaticamente.
