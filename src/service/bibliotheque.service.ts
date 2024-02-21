import { Injectable, NotFoundException } from '@nestjs/common';
import { Bibliotheque } from 'src/model/Bibliotheque';
import { Livre } from 'src/model/livre';

@Injectable()
export class BibliothequeService {
  private bibliotheque: Bibliotheque[] = [];
  private nombreBibliotheque = 0;
  private nombreLivre = 0;

  getBibliotheque(id: number): Bibliotheque {
    let res = this.bibliotheque.find((bibliotheque) => bibliotheque.id === id);
    if (res) {
      return res;
    }
    throw new NotFoundException('Bibliotheque not found');
  }
  
  getLivreById(id: number): Livre {
    let res = this.bibliotheque.find((bibliotheque) => bibliotheque.livres.find((livre) => livre.id === id));
    if (res) {
      return res.livres.find((livre) => livre.id === id);
    }
    throw new NotFoundException('Livre not found');
  }
  
  getAllLivre() : {livre : Livre, bibliotheque : Bibliotheque}[] {
    let res = [];
    this.bibliotheque.forEach((bibliotheque) => {
      bibliotheque.livres.forEach((livre) => {
        res.push({livre, bibliotheque});
      });
    });
    return res;
  }
  
  getAllBibliotheque(): Bibliotheque[] {
    return this.bibliotheque;
  }
  
  addLivre(livre: Livre, bibliothequeId: number): Livre {
    let res = this.bibliotheque.find((bibliotheque) => bibliotheque.id === bibliothequeId);
    if (res) {
      livre.id = this.nombreLivre++;
      res.livres.push(livre);
      return livre;
    }
    throw new NotFoundException('Bibliotheque not found');
  }
  
  addBibliotheque(bibliotheque: Bibliotheque): Bibliotheque {    
    bibliotheque.id = this.nombreBibliotheque++;
    bibliotheque.livres = [];
    this.bibliotheque.push(bibliotheque);
    return bibliotheque;
  }
  
  deleteLivre(id: number): Livre {
    let res = this.bibliotheque.find((bibliotheque) => bibliotheque.livres.find((livre) => livre.id === id));
    if (res) {
      let index = res.livres.findIndex((livre) => livre.id === id);
      return res.livres.splice(index, 1)[0];
    }
    throw new NotFoundException('Livre not found');
  }
  
  deleteBibliotheque(id: number): Bibliotheque {
    let index = this.bibliotheque.findIndex((bibliotheque) => bibliotheque.id === id);
    if (index !== -1) {
      return this.bibliotheque.splice(index, 1)[0];
    }
    throw new NotFoundException('Bibliotheque not found');
  }
  
  emprunterLivre(id: number): Livre {
    let livre = this.getLivreById(id);
    if (livre.disponible) {
      throw new Error('Livre déjà emprunté');
    }
    livre.disponible = false;
    return livre;
  }
  
  rendreLivre(id: number): Livre {
    let livre = this.getLivreById(id);
    if (livre.disponible) {
      throw new Error('Livre déjà rendu');
    }
    livre.disponible = true;
    return livre;
  }

}
