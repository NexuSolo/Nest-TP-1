import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Bibliotheque } from 'src/model/Bibliotheque';
import { Livre } from 'src/model/livre';
import { BibliothequeService } from 'src/service/bibliotheque.service';

@Controller('admin')
export class AdminController {

    constructor(private readonly bibliothequeService: BibliothequeService) {}

    @Post('livre/add')
    addLivre(@Body('livre') livre: Livre, @Body('bibliotheque') bibliothequeId : number): Livre {
      return this.bibliothequeService.addLivre(livre, bibliothequeId);
    }
  
    @Post('bibliotheque/add')
    addBibliotheque(@Body() bibliotheque: Bibliotheque): Bibliotheque {
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

}
