import { useQuery } from '@tanstack/react-query';
import api from 'api/api';

export const usePosts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get all posts'],
    queryFn: api.post.getAllPosts,
    select: data => data.data.data,
  });

  return {
    data,
    isLoading,
  };
};
