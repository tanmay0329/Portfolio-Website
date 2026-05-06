/**
 * Advanced AI SEO Middleware for Vercel (Vite/React)
 * Intercepts requests to provide LLM-friendly Markdown content
 * if requested via the 'Accept' header.
 */
export default function middleware(request) {
  const acceptHeader = request.headers.get('accept') || '';
  const url = new URL(request.url);

  // If the requester explicitly asks for Markdown (AI Bots / LLM Crawlers like GPTBot, Perplexity)
  if (acceptHeader.includes('text/markdown')) {
    // Rewrite the URL to point to our semantic markdown version
    url.pathname = '/portfolio.md';
    return Response.rewrite(url);
  }

  // Otherwise, continue to the standard response
  return Response.next();
}
