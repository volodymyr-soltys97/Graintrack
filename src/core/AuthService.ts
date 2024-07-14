import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { firstValueFrom, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@injectable()
export class AuthService {
  login(username: string, password: string) {
    // Mock API call
    const isAuthenticated$ = of(username === 'admin' && password === 'admin').pipe(delay(1000));
    return firstValueFrom(isAuthenticated$);
  }
}
