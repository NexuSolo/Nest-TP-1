import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AuthentificationModule } from './authentification.module';
import { AuthentificationController } from 'src/controller/authentification.controller';
import { AuthentificationMiddleware } from 'src/middleware/authentification.middleware';
import { AuthentificationService } from 'src/service/authentification.service';
import { BibliothequeService } from 'src/service/bibliotheque.service';
import { AdminMiddleware } from 'src/middleware/admin.middleware';
import { AdminController } from 'src/controller/admin.controller';

@Module({
  imports: [AuthentificationModule.register([{id: 1, nom: 'admin', password: 'admin', role: 'admin'}])],
  controllers: [AppController, AuthentificationController, AdminController],
  providers: [BibliothequeService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthentificationMiddleware).forRoutes(AppController);
    consumer.apply(AdminMiddleware).forRoutes(AdminController);
  }
  
}
