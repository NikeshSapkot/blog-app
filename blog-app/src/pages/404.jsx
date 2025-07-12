import { Link } from 'react-router-dom';

export default function NotFound() {  // Add "default" here
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-100">404</h1>
      <p className="text-xl mt-4 text-gray-600 dark:text-gray-300">
        Page not found
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}