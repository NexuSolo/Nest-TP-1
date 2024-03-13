import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { AuthentificationService } from 'src/service/authentification.service';

@Injectable()
export class AdminMiddleware implements NestMiddleware {

  constructor(private readonly authentificationService : AuthentificationService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const nom: string = String(req.query.nom);
    const password: string = String(req.query.password )
    const role: string = String(req.query.role);
    console.log('Request...', req.method, req.url, nom, password, role);
    
    let utilisateur = this.authentificationService.authentification({id: null, nom: nom, password: password, role: role});
    if(utilisateur == null) {
      throw new UnauthorizedException('Utilisateur non authentifié')
    }
    if(utilisateur.role !== 'ADMIN') {
      throw new UnauthorizedException('Utilisateur non admin');
    }
    next();
    return;
  }
  
}
