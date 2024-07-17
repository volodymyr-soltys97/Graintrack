import React from 'react';
import TextInput from '../shared/Input';
import Button from '../shared/button';

interface LoginProps {
  username: string;
  password: string;
  onLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const Auth: React.FC<LoginProps> = ({
  username,
  password,
  onLoginChange,
  onPasswordChange,
  onSubmit
 }) => {

  return (
    <article className='flex justify-center gap-5 pt-20 min-h-screen bg-gradient-to-r from-orange-500 to-yellow-500'>
      <form onSubmit={onSubmit} className='flex gap-2 flex-col w-80'>
        <TextInput
          label='Login'
          id='login'
          type='text'
          placeholder='Login'
          value={username}
          onChange={onLoginChange}
          required
        />
        <TextInput
          label='Password'
          id='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={onPasswordChange}
          required
        />
        <Button type='submit'>Login</Button>
      </form>
    </article>
  );
};

export default Auth;
