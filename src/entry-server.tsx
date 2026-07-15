/**
 * SSR entry point — used only during `vite build --ssr` (prerendering).
 * Never bundled into the client build. No browser-only globals are used here.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { routeConfig } from './routes/routeConfig';

export interface RenderResult {
  html: string;
  head: string;
}

export async function render(url: string): Promise<RenderResult> {
  const helmetContext: { helmet?: any } = {};

  // Build a Web-spec Request for the static handler
  const request = new Request(`https://magicmond.com${url}`, {
    method: 'GET',
    headers: { Accept: 'text/html' },
  });

  const { query, dataRoutes } = createStaticHandler(routeConfig);
  const context = await query(request);

  // If a redirect response was returned, surface it so the prerender
  // script can skip or follow it.
  if (context instanceof Response) {
    throw new Error(`Redirect at ${url} → ${context.headers.get('Location')}`);
  }

  const staticRouter = createStaticRouter(dataRoutes, context);

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouterProvider
          router={staticRouter}
          context={context}
          nonce=""
          hydrate={false}
        />
      </HelmetProvider>
    </React.StrictMode>,
  );

  const { helmet } = helmetContext;

  // Serialise all helmet-managed head tags for injection into the HTML template
  const head = [
    helmet?.title?.toString(),
    helmet?.priority?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
  ]
    .filter(Boolean)
    .join('\n  ');

  return { html, head };
}
