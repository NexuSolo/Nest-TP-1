import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { AuthentificationService } from 'src/service/authentification.service';

@Injectable()
export class AdminMiddleware implements NestMiddleware {

  constructor(private readonly authentificationService : AuthentificationService) {}

  use(req: Request, res: Response, next: NextFunction) {
    console.log('query',req.query);
    console.log('query password',req.query.password);
    console.log('query nom',req.query.nom);
    const nom: string = String(req.query.nom);
    const password: string = String(req.query.password )
    const role: string = String(req.query.role);
    
    let utilisateur = this.authentificationService.authentification({id: null, nom: nom, password: password, role: role});
    if(utilisateur == null) {
      throw new UnauthorizedException('Utilisateur non authentifié')
    }
    if(utilisateur.role !== 'ADMIN') {
      throw new UnauthorizedException('Utilisateur non admin');
    }
    console.log('Request...', req.method, req.url, nom, password, role);
    next();
    return;
  }
  
}
