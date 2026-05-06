/**
 * Standard Vercel Edge Middleware (Vite/React Compatible)
 * Fixed to avoid 500 errors by using standard Web API Response.
 */
export default async function middleware(request) {
  const accept = request.headers.get('accept') || '';
  const url = new URL(request.url);

  // Only run logic for the root path to avoid interfering with assets
  if (url.pathname === '/' && accept.includes('text/markdown')) {
    // Manually fetch and return the markdown content
    const markdownUrl = new URL('/portfolio.md', request.url);
    const response = await fetch(markdownUrl);
    
    // Return a new response with the markdown content but correct content-type
    return new Response(response.body, {
      headers: {
        'content-type': 'text/markdown; charset=utf-8',
      },
    });
  }

  // Returning nothing continues the request to the static site
}
