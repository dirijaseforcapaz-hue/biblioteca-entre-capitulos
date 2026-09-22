export const prerender = true;

export function GET() {
  const isProduction = (import.meta.env.PUBLIC_SITE_ENV ?? 'staging') === 'production';
  const body = isProduction
    ? `User-agent: *\nAllow: /\n\nSitemap: https://bibliotecaentrecapitulos.com.br/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
