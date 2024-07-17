import { useContext } from 'react';
import { ContainerContext } from '../core/container-context';
import { AuthService } from '../core/AuthService';

export const useAuthService = () => {
  const container = useContext(ContainerContext);
  if (container) return container.get(AuthService);
};

