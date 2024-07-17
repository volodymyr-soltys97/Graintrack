import { Container } from 'inversify';
import { AuthService } from './AuthService';

const container = new Container();
container.bind<AuthService>(AuthService).toSelf();

export { container };