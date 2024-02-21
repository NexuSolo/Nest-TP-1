import { Injectable } from '@nestjs/common';
import { Utilisateur } from 'src/model/Utilisateur';

@Injectable()
export class AuthentificationService {
    utilisateurs : Utilisateur[] = [];
    nombreUtilisateurs : number = 0;

    authentification(utilisateur : Utilisateur): Utilisateur {        
        console.log('utilisateurs', this.utilisateurs);        
        let user = this.utilisateurs.find(u => u.nom == utilisateur.nom && u.password == utilisateur.password);
        console.log('user', user);
        
        if(user) {
            return user;
        }
        return null;
    }

    inscription(utilisateur: Utilisateur) {
        utilisateur.id = this.nombreUtilisateurs++;
        this.utilisateurs.push(utilisateur);
        console.log('utilisateurs', this.utilisateurs);        

        return utilisateur;
    }

}
