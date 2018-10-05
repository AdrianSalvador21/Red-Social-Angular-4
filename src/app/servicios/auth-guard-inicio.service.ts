import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { UsuarioService } from './usuario.service';


@Injectable()
export class AuthGuardServiceInicio implements CanActivate {
  usuario:any;
  sesion:any;

  body:any;
  objeto:any;

  constructor(private _usuarioService: UsuarioService, private router: Router) {
  }
  canActivate(){   
    if(this._usuarioService.usuarioCorrecto()){
      //console.log("Paso el guard");
      return true;
    }
    else{
      //console.log('Bloqueado por el guard');
      this.router.navigate(['/login']);
      return false;
    }
  }

  // buscarUsuario(){
  //   this.usuario = localStorage.getItem('clave');
  //   this.objeto = {clave: this.usuario};
  //   this.body = 'data=' + JSON.stringify(this.objeto);
  //   this._usuarioService.verificarUsuario(this.body).subscribe((res:any) => {
  //     console.log((res));
  //     if(res.length >= 1){
  //         this.sesion = 'true';
  //     }else{
  //       this.sesion = 'false';
  //     }
  //   });
  // }
}
