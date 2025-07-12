import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About This Blog</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4">
          Welcome to my blog! This is a platform where I share my thoughts on technology, 
          programming, and everything in between.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          To provide high-quality, accessible content for developers of all skill levels.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Latest tech news and tutorials</li>
          <li className="mb-2">Practical coding examples</li>
          <li className="mb-2">Community-driven content</li>
        </ul>

        <div className="mt-8 border-t pt-6 border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-4">Get in Touch</h3>
          <p>
            Have questions? <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}