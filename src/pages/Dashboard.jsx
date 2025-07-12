import { useAuth } from '../contexts/AuthContext';

// Add "export default" here
export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Posts</h1>
      {user ? (
        <p>Your posts will appear here...</p>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  );
}