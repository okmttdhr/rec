import * as http from 'http';
import fetch from 'isomorphic-unfetch';
import { Search as GoogleCustomSearch } from 'types/customsearch';
import { Result } from 'types/research';
import * as url from 'url';

export default async (req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    const GOOGLE_SECRETS = `key=${process.env.GOOGLE_CUSTOM_SEARCH_KEY}&cx=${process.env.GOOGLE_CUSTOM_SEARCH_CX}`;
    const query = url.parse(req.url, true).query as { q: string };
    const q = `q=${query.q}`;
    const u = encodeURI(`https://customsearch.googleapis.com/customsearch/v1?${GOOGLE_SECRETS}&${q}`);
    const response = await fetch(u);

    const data: GoogleCustomSearch = await response.json();
    const results: Result[] = data.items.map((item) => {
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
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end();
  }
};
