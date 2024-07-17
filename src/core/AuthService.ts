import 'reflect-metadata';
import { firstValueFrom, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { injectable } from "inversify";

@injectable()
export class AuthService {
  login(username: string, password: string) {
    // Mock API call
    const isAuthenticated$ = of(username === 'admin' && password === 'admin').pipe(delay(1000));
    return firstValueFrom(isAuthenticated$);
  }
}
