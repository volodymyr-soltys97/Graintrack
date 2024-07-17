import React, { useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import { toast } from 'react-toastify';
import { useNavigate } from '@tanstack/react-router';
import Auth from '../features/auth';
import { useAuthService } from '../hooks/useAuthService';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const authService = useAuthService();

  const usernameSubject = new Subject<string>();
  const passwordSubject = new Subject<string>();
  const submitSubject = new Subject<void>();

  useEffect(() => {
    const usernameSubscription = usernameSubject.pipe().subscribe(setUsername);

    const passwordSubscription = passwordSubject.pipe().subscribe(setPassword);

    const submitSubscription = submitSubject.subscribe(async () => {
      if (authService) {
        const success = await authService.login(username, password);
        if (success) {
          toast.success('Login successful');
          navigate({ to: '/' });
        } else {
          toast.error('Invalid login or password');
        }
        setPassword('');
        setUsername('');
      }
    });

    return () => {
      usernameSubscription.unsubscribe();
      passwordSubscription.unsubscribe();
      submitSubscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, password, authService, navigate]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    usernameSubject.next(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordSubject.next(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitSubject.next();
  };

  return (
    <Auth
      username={username}
      password={password}
      onLoginChange={handleLoginChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
}
export default Login;
