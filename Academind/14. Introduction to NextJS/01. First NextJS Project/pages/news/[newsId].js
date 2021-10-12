//our-domain.com/news/[any identifier]

import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request with the newsId

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
