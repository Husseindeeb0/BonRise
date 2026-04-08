import { useCheckAuthQuery } from '../state/services/auth/authAPI';

export const useAuth = () => {
  const query = useCheckAuthQuery();

  const user = query.data?.data;
  const isAuthenticated = !!user && !query.isError;

  return {
    user,
    isAuthenticated,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error,
    status: query.status,
  };
};
