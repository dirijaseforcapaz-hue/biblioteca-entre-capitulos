import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET() {
  const site = 'https://bibliotecaentrecapitulos.com.br';
  const books = await getCollection('livros');
  const chapters = await getCollection('capitulos');
  const urls = [
    `${site}/`,
    `${site}/livros`,
    `${site}/sobre`,
    `${site}/privacidade`,
    ...books.map((book) => `${site}/livros/${book.data.slug}`),
    ...chapters.map((chapter) => `${site}/${chapter.data.bookSlug}/${chapter.data.slug}`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
