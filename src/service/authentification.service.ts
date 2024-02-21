import { Injectable } from '@nestjs/common';
import { Utilisateur } from 'src/model/Utilisateur';

@Injectable()
export class AuthentificationService {
    utilisateurs : Utilisateur[] = [];
    nombreUtilisateurs : number = 0;

    authentification(utilisateur : Utilisateur): Utilisateur {
        let user = this.utilisateurs.find(u => u.nom == utilisateur.nom && u.password == utilisateur.password);
        if(user) {
            return user;
        }
        return null;
    }

    inscription(utilisateur: Utilisateur) {
        utilisateur.id = this.nombreUtilisateurs++;
        this.utilisateurs.push(utilisateur);
        return utilisateur;
    }

}
