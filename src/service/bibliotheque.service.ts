import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
  
  getAllLivre() : {livre : Livre, bibliothequeId : number}[] {
    let res = [];
    this.bibliotheque.forEach((bibliotheque) => {
      bibliotheque.livres.forEach((livre) => {
        res.push({livre, bibliothequeId: bibliotheque.id});
      });
    });
    return res;
  }
  
  getAllBibliotheque(): Bibliotheque[] {
    return this.bibliotheque;
  }
  
  addLivre(livre: Livre, bibliothequeId: number): Livre {
    console.log("addLivre", livre, bibliothequeId);
    
    let bibliotheque = this.bibliotheque.find((bibliotheque) => bibliotheque.id == bibliothequeId);
    if (bibliotheque) {
      livre.id = this.nombreLivre++;
      livre.disponible = true;
      bibliotheque.livres.push(livre);
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
    let bibliothequeIndex = this.bibliotheque.findIndex((bibliotheque) => bibliotheque.id === id);
    if (bibliothequeIndex !== -1) {
      let bibliotheque = this.bibliotheque[bibliothequeIndex];
      for(let livre of bibliotheque.livres) {
        this.deleteLivre(livre.id);
      }
      return this.bibliotheque.splice(bibliothequeIndex, 1)[0];
    }
    throw new NotFoundException('Bibliotheque not found');
  }
  
  emprunterLivre(id: number): Livre {
    let livre = this.getLivreById(id);
    if(!livre) {
      throw new NotFoundException('Livre not found');
    }
    if (!livre.disponible) {
      throw new ConflictException('Livre déjà emprunté');
    }
    livre.disponible = false;
    return livre;
  }
  
  rendreLivre(id: number): Livre {
    let livre = this.getLivreById(id);
    if (livre.disponible) {
      throw new ConflictException('Livre déjà rendu');
    }
    livre.disponible = true;
    return livre;
  }

}
