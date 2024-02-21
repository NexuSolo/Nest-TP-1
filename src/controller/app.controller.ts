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
  getAllLivre(): {livre : Livre, bibliotheque : Bibliotheque}[] {
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

  @Post('livre/add')
  addLivre(livre: Livre): Livre {
    return this.bibliothequeService.addLivre(livre);
  }

  @Post('bibliotheque/add')
  addBibliotheque(bibliotheque: Bibliotheque): Bibliotheque {
    return this.bibliothequeService.addBibliotheque(bibliotheque);
  }

  @Post('livre/delete/:id')
  deleteLivre(@Param('id', ParseIntPipe) id: number): Livre {
    return this.bibliothequeService.deleteLivre(id);
  }

  @Post('bibliotheque/delete/:id')
  deleteBibliotheque(@Param('id', ParseIntPipe) id: number): Bibliotheque {
    return this.bibliothequeService.deleteBibliotheque(id);
  }

  @Put('livre/emprunter/:id')
  emprunterLivre(@Param('id', ParseIntPipe) id: number): Livre {
    return this.bibliothequeService.emprunterLivre(id);
  }

  @Put('livre/rendre/:id')
  rendreLivre(@Param('id', ParseIntPipe) id: number): Livre {
    return this.bibliothequeService.rendreLivre(id);
  }

}
