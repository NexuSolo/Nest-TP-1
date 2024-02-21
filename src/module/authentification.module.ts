import { DynamicModule, Module } from '@nestjs/common';
import { AuthentificationService } from 'src/service/authentification.service';

@Module({})
export class AuthentificationModule {
    static register() : DynamicModule {
        return {
            module: AuthentificationModule,
            providers: [
                {
                    provide: AuthentificationService,
                    useValue: new AuthentificationService()
                }
            ],
            exports: [AuthentificationService]
        }
    }
}
