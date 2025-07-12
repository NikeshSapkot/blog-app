import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function CreatePost() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  // ... rest of your component
}