import { AdminMiddleware } from '../middleware/admin.middleware';

describe('AdminMiddleware', () => {
  it('should be defined', () => {
    expect(new AdminMiddleware()).toBeDefined();
  });
});
