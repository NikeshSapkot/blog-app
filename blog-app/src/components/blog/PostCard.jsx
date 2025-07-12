import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function PostCard({ post }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/post/${post.id}`} className="block p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {post.title}
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>
            {post.content.substring(0, 200) + '...'}
          </ReactMarkdown>
        </div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {new Date(post.created_at).toLocaleDateString()}
        </div>
      </Link>
    </article>
  );
}