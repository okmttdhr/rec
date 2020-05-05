import * as http from 'http';
import fetch from 'isomorphic-unfetch';
import { Result } from 'types/research';
import * as url from 'url';

export default async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const query = url.parse(req.url, true).query;
  const response = await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_KEY}&cx=${process.env.GOOGLE_CUSTOM_SEARCH_CX}&q=${query.q}`,
  );
  const data = await response.json();
  const results: Result[] = data.items.map((item: any) => {
    return {
      id: item.cacheId,
      title: item.title,
      link: item.link,
      star: false,
      read: false,
    };
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      results,
    }),
  );
};
