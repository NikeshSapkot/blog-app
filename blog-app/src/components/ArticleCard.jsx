import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ArticleCard({ article }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-700 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.urlToImage || 'https://placehold.co/600x400?text=News+Image'}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://placehold.co/600x400?text=Image+Not+Available';
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
        <span className="absolute bottom-3 left-4 text-xs text-white bg-blue-600 px-2 py-1 rounded-full">
          {new Date(article.publishedAt).toLocaleDateString()}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-white line-clamp-2">
            {article.title}
          </h2>
          {article.source?.name && (
            <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded ml-2">
              {article.source.name}
            </span>
          )}
        </div>

        <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
          {article.description}
        </p>

        <Link
          to={`/news/${article.id}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group mt-auto"
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string.isRequired,
    source: PropTypes.shape({
      name: PropTypes.string
    }),
    author: PropTypes.string
  }).isRequired
};