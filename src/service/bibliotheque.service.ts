import { Injectable } from '@nestjs/common';
import { Bibliotheque } from 'src/model/Bibliotheque';
import { Livre } from 'src/model/livre';

@Injectable()
export class BibliothequeService {
  getBibliotheque(id: number): Bibliotheque {
    throw new Error('Method not implemented.');
  }
  
  getLivreById(id: number): Livre {
    throw new Error('Method not implemented.');
  }
  
  getAllLivre() : {livre : Livre, bibliotheque : Bibliotheque}[] {
    throw new Error('Method not implemented.');
  }
  
  getAllBibliotheque(): Bibliotheque[] {
    throw new Error('Method not implemented.');
  }
  
  addLivre(livre: Livre): Livre {
    throw new Error('Method not implemented.');
  }
  
  addBibliotheque(bibliotheque: Bibliotheque): Bibliotheque {
    throw new Error('Method not implemented.');
  }
  
  deleteLivre(id: number): Livre {
    throw new Error('Method not implemented.');
  }
  
  deleteBibliotheque(id: number): Bibliotheque {
    throw new Error('Method not implemented.');
  }
  
  emprunterLivre(id: number): Livre {
    throw new Error('Method not implemented.');
  }
  
  rendreLivre(id: number): Livre {
    throw new Error('Method not implemented.');
  }

}
