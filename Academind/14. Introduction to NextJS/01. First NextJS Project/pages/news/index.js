//our-domain.com/news

import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="news/article-1">Article 1</Link>
        </li>
        <li>
          <Link href="news/article-2">Article 2</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
