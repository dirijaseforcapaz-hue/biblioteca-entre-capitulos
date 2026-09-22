# Atualização v0.9.0 - Home simplificada

A página inicial foi redesenhada para funcionar como entrada da Biblioteca, e não como uma página editorial carregada de seções.

## Nova hierarquia

1. Hero institucional com uma única chamada para ação.
2. Catálogo das coleções imediatamente abaixo.
3. Quatro mapas em destaque.
4. Método Entre Capítulos: Entenda -> Revise -> Aprofunde.

## O que saiu da Home

- seção grande de estatísticas;
- bloco "Escolha como explorar";
- capítulos misturados de várias coleções;
- análises completas dos livros;
- manifesto final de grande destaque;
- múltiplas chamadas concorrendo no primeiro bloco.

As análises completas, capítulos e todos os mapas continuam disponíveis nas páginas de cada livro.

## Proteção de assets

O build agora executa `scripts/validate-static-assets.mjs` antes do Astro. Se uma capa, imagem de mapa ou PDF cadastrado estiver faltando em `public/`, o deploy falha com a lista dos arquivos ausentes, evitando links quebrados em produção.
