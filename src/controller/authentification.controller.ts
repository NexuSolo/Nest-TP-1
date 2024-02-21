import { Body, Controller, Post } from '@nestjs/common';
import { Utilisateur } from 'src/model/Utilisateur';
import { AuthentificationService } from 'src/service/authentification.service';

@Controller('authentification')
export class AuthentificationController {

    constructor(private readonly authentificationService : AuthentificationService) {}

    @Post('inscription')
    inscription(@Body() body: Utilisateur) : Utilisateur {
      return this.authentificationService.inscription(body);
    }
  
    @Post('')
    authentification(@Body() body: Utilisateur) : Utilisateur {
      return this.authentificationService.authentification(body);
    }

}
