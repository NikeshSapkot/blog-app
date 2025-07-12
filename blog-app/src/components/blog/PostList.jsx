import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import PostCard from './PostCard';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid gap-6 max-w-4xl mx-auto py-8 px-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}