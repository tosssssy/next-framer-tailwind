// import { Config } from "./Config";
export default class ContentfulApi {
  static async getAllNews() {
    const query: string = `
      query GetAllNews {
        newsCollection {
          items {
            title
            postdate
            image {
              url
            }
            body {
              json
            }
          }
        }
      }
      `;
    const response = await this.callContentful(query);
    const AllNews = response.data.newsCollection.items ? response.data.newsCollection.items : [];

    return AllNews;
  }

  static async callContentful(query: string) {
    const fetchUrl: string = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) => response.json());
      return data;
    } catch (error) {
      throw new Error('Could not fetch data from Contentful!');
    }
  }
}
