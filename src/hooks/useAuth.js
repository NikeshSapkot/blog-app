import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function usePosts() {
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

  return { posts };
}