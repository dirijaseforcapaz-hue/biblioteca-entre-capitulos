export const prerender = true;

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: https://bibliotecaentrecapitulos.com.br/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
