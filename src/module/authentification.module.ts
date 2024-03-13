import { DynamicModule, Module } from '@nestjs/common';
import { Utilisateur } from 'src/model/Utilisateur';
import { AuthentificationService } from 'src/service/authentification.service';

@Module({})
export class AuthentificationModule {
    static register(users : Utilisateur[]) : DynamicModule {
        return {
            module: AuthentificationModule,
            providers: [
                {
                    provide: 'USERS',
                    useValue: users
                },
                AuthentificationService
            ],
            exports: [AuthentificationService]
        }
    }
}
