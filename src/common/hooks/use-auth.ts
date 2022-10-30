import { useContext } from 'react';

import { AuthContext } from 'Common/contexts';

export function useAuth() {
  const value = useContext(AuthContext);

  return value;
}