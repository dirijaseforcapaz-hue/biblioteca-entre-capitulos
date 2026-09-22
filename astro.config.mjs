import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bibliotecaentrecapitulos.com.br',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true
});
