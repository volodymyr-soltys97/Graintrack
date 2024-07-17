import { AuthService } from '../../core/AuthService';
import { describe, it, expect } from 'vitest';

describe('AuthService', () => {
  it('should return true for correct credentials', async () => {
    const authService = new AuthService();
    const result = await authService.login('admin', 'admin');
    expect(result).toBe(true);
  });

  it('should return false for incorrect credentials', async () => {
    const authService = new AuthService();
    const result = await authService.login('user', 'pass');
    expect(result).toBe(false);
  });
});