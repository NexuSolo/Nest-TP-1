import { AuthentificationMiddleware } from '../middleware/authentification.middleware';

describe('AuthentificationMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthentificationMiddleware()).toBeDefined();
  });
});
