import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  clave:string = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };

  URL_GENERAL = 'http://localhost:8080/social/db';

  constructor(private http:HttpClient) { 
    console.log('Servicio usuarios');
  }
  
  //Llama al registro de usuarios
  registrarUsuario(usuario){
    let url = this.URL_GENERAL + '/registrarUsuario.php';
    return this.http.post(url, usuario, this.httpOptions);
  }

  //Retorna ok si el usuario es correcto, error si la contraseña o el correo son invalidos
  iniciarSesion(usuario){
    let url = this.URL_GENERAL + '/inicioSesion.php';
    let body = 'data=' + JSON.stringify(usuario);
    let respuesta:string = '';
    return this.http.post(url, body, this.httpOptions).pipe(
      map((res:any) => {
        if(res.length >= 1){
          localStorage.setItem('clave', res[0].clave);
          this.clave = localStorage.getItem('clave');
          return  'OK';
        }else{
          return 'Error';  
        }
      })
    );
  }

  //Funcion por usar
  verificarUsuario(){
    let url = this.URL_GENERAL + '/verificarUsuario.php';
    let body = 'data=' + JSON.stringify({clave: localStorage.getItem('clave')});
    return this.http.post(url, body, this.httpOptions).pipe(
      map((res:any) => {
        if(res.length >= 1){
          return true;
        }else{
          return false;
        }
      })
    )
  }
  
  //Verifica clave de localStorage
  usuarioCorrecto(){
    let localclave = localStorage.getItem('clave');
    if(localclave == null){
      this.clave = '';
    }else{
      this.clave = localclave;
    }
    return ( this.clave.length > 5) ? true : false;
  }


}
