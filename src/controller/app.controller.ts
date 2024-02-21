import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { AuthentificationService } from 'src/service/authentification.service';
import { Utilisateur } from 'src/model/Utilisateur';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('bibliotheque')
  getAllBibliotheque() {
    return this.appService.getAllBibliotheque();
  }

  @Get('livre')
  getAllLivre() {
    return this.appService.getAllLivre();
  }

  @Get('livre/:id')
  getLivreById(@Param('id') id: string){
    return this.appService.getLivreById(id);
  }

  @Get('bibliotheque/:id')
  getBibliothequeById(@Param('id') id: string){
    return this.appService.getBibliotheque(id);
  }

}
