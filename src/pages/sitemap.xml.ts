import { getCollection } from 'astro:content';

export const prerender = true;

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export async function GET() {
  const site = 'https://bibliotecaentrecapitulos.com.br';
  const books = await getCollection('livros');
  const chapters = await getCollection('capitulos');

  const staticPages = [
    { loc: `${site}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${site}/livros`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${site}/sobre`, changefreq: 'monthly', priority: '0.5' },
    { loc: `${site}/privacidade`, changefreq: 'monthly', priority: '0.3' }
  ];

  const bookPages = books.map((book) => ({
    loc: `${site}/livros/${book.data.slug}`,
    lastmod: (book.data.updatedAt ?? book.data.publishedAt).toISOString().slice(0, 10),
    changefreq: book.data.status === 'em-producao' ? 'weekly' : 'monthly',
    priority: '0.9'
  }));

  const chapterPages = chapters.map((chapter) => ({
    loc: `${site}/${chapter.data.bookSlug}/${chapter.data.slug}`,
    lastmod: (chapter.data.updatedAt ?? chapter.data.publishedAt).toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: '0.8'
  }));

  const urls = [...staticPages, ...bookPages, ...chapterPages];
  const nodes = urls.map((item) => {
    const lastmod = 'lastmod' in item && item.lastmod ? `\n    <lastmod>${item.lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${escapeXml(item.loc)}</loc>${lastmod}\n    <changefreq>${item.changefreq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${nodes}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
