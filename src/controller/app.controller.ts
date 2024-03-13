import { Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BibliothequeService } from 'src/service/bibliotheque.service';
import { Livre } from 'src/model/Livre';
import { Bibliotheque } from 'src/model/Bibliotheque';

@Controller()
export class AppController {
  constructor(private readonly bibliothequeService: BibliothequeService) {}

  @Get('bibliotheque')
  getAllBibliotheque(): Bibliotheque[] {
    return this.bibliothequeService.getAllBibliotheque();
  }

  @Get('livre')
  getAllLivre(): {livre : Livre, bibliothequeId : number}[] {
    return this.bibliothequeService.getAllLivre();
  }

  @Get('livre/:id')
  getLivreById(@Param('id', ParseIntPipe) id: number): Livre {
    return this.bibliothequeService.getLivreById(id);
  }

  @Get('bibliotheque/:id')
  getBibliothequeById(@Param('id', ParseIntPipe) id: number): Bibliotheque {
    return this.bibliothequeService.getBibliotheque(id);
  }

  @Put('livre/emprunter/:id')
  emprunterLivre(@Param('id', ParseIntPipe) id: number): Livre {
    console.log('emprunterLivre', id);
    return this.bibliothequeService.emprunterLivre(id);
  }

  @Put('livre/rendre/:id')
  rendreLivre(@Param('id', ParseIntPipe) id: number): Livre {
    return this.bibliothequeService.rendreLivre(id);
  }

}
