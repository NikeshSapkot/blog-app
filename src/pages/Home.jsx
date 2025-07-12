import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = async (pageNum) => {
    try {
      const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&page=${pageNum}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      
      if (data.articles.length === 0) {
        setHasMore(false);
      } else {
        const articlesWithIds = data.articles.map(article => ({
          ...article,
          id: `${pageNum}-${Math.random().toString(36).substr(2, 9)}`
        }));
        
        setPosts(prev => [...prev, ...articlesWithIds]);
        localStorage.setItem('cachedArticles', JSON.stringify([
          ...JSON.parse(localStorage.getItem('cachedArticles') || '[]'),
          ...articlesWithIds
        ]));
      }
    } catch (error) {
      console.error("Error:", error);
      if (page === 1) {
        setPosts(getFallbackArticles());
      }
    } finally {
      setLoading(false);
    }
  };

  const getFallbackArticles = () => [
    {
      id: 'fallback-1',
      title: "React 19 Beta Released",
      description: "The latest version includes new features like Actions and Document Metadata.",
      content: "Full article content about React 19 features...",
      urlToImage: "https://placehold.co/600x400?text=React+News",
      publishedAt: new Date().toISOString(),
      source: { name: "Tech News" },
      author: "Jane Doe"
    },
    // Add more fallback articles as needed
  ];

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const loadMore = () => setPage(prev => prev + 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Latest Tech News</h1>
      <p className="text-gray-400 mb-8">Curated by Nikesh Sapkota</p>
      
      {loading && page === 1 ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {posts.map((post) => (
              <ArticleCard key={post.id} article={post} />
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Load More News'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}