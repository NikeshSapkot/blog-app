import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullContent, setFullContent] = useState('');

  useEffect(() => {
    const fetchFullArticle = async () => {
      try {
        const cachedArticles = JSON.parse(localStorage.getItem('cachedArticles')) || [];
        const cachedArticle = cachedArticles.find(a => a.id === id);

        if (cachedArticle) {
          setArticle(cachedArticle);
          
          // Process the content to ensure it's properly displayed
          let content = cachedArticle.content || cachedArticle.description || '';
          
          // Remove any truncated indicators like [+1234 chars]
          content = content.replace(/\s*\[\+\d+\s*chars\]\s*$/, '');
          
          // If content is still empty or too short, provide fallback
          if (!content || content.length < 100) {
            content = cachedArticle.description 
              ? `${cachedArticle.description}\n\n${cachedArticle.description.repeat(1)}`
              : "Full article content not available. Please visit the source website for complete details.";
          }

          setFullContent(content);
        }
      } catch (error) {
        console.error("Error loading article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFullArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p>The requested article could not be loaded.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <article className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Available';
                }}
              />
            )}
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{article.title}</h1>
                  <p className="text-gray-400">
                    By {article.author || "Unknown"} • {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                </div>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {article.source?.name || "NewsBlog"}
                </span>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  {article.description}
                </p>
                
                {/* Scrollable full article content section */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">Full Article</h2>
                    {article.url && (
                      <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Read original at source ↗
                      </a>
                    )}
                  </div>
                  <div className="text-gray-300 space-y-4 max-h-96 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                    {fullContent.split('\n').map((paragraph, i) => (
                      <p key={i} className="whitespace-pre-line">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700 flex justify-between">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  ← Back to News
                </Link>
                {article.url && (
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    View Original Source
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}