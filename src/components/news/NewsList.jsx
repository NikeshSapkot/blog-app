import { useState, useEffect } from 'react';
import { fetchNews } from '../../api/newsApi';

export default function NewsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const newsPosts = await fetchNews();
        if (newsPosts.length === 0) {
          setError('No articles found');
        }
        setPosts(newsPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return (
    <div className="flex justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-8 text-red-500">
      Error: {error}
    </div>
  );

  if (posts.length === 0) return (
    <div className="text-center py-8 text-gray-500">
      No articles available
    </div>
  );

  return (
    <div className="grid gap-6 py-8 px-4">
      {posts.map((post, index) => (
        <article key={index} className="border rounded-lg overflow-hidden shadow-sm">
          {post.urlToImage && (
            <img 
              src={post.urlToImage} 
              alt={post.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/600x400?text=No+Image';
              }}
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-3">{post.description}</p>
            <a 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read full article
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}