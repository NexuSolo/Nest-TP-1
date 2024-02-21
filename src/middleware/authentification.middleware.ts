import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction } from 'express';
import { AuthentificationService } from 'src/service/authentification.service';

@Injectable()
export class AuthentificationMiddleware implements NestMiddleware {

  constructor(private readonly authentificationService : AuthentificationService) {}

  use(req: Request, res: Response, next: NextFunction) {
    let utilisateur = this.authentificationService.authentification({id: null, nom: req.headers['nom'], password: req.headers['password'], role: null});
    if(utilisateur == null) {
      throw new UnauthorizedException('Utilisateur non authentifié')
    }
    console.log('Request...', req.method, req.url, req.headers['nom'], req.headers['password'], req.headers['role']);
    next();
    return;
  }
  
}
