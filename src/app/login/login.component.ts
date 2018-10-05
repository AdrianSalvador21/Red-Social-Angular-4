import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarLogin:boolean = true;
  usuarioRegistrar:Object;
  usuarioIniciar:Object;
  body:any;

  correoNoValido:boolean = false;
  usuarioYaRegistrado:boolean = false;
  registroCorrecto:boolean = false;
  contraseniaNoCoincide:boolean = false;

  inicioIncorrecto:boolean = false;

  constructor(private _usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  registrarUsuario(forma:NgForm){
    this.usuarioRegistrar = forma.value;
    //Verificar si las contraseñas son iguales
    if(this.usuarioRegistrar['contrasenia'] == this.usuarioRegistrar['contrasenia2']){
        this.body = 'data=' + JSON.stringify(this.usuarioRegistrar);
        this._usuarioService.registrarUsuario(this.body).subscribe(res => {
          if(res[0] == 'OK'){
            this.registroCorrecto = true;
            setTimeout(()=>{
              this.registroCorrecto = false;
            }, 5000);
          }else if(res[0] == 'Ya registrado'){
            this.usuarioYaRegistrado = true;
            setTimeout(()=>{
              this.usuarioYaRegistrado = false;
            }, 5000);
          }else{
            this.correoNoValido = true;
            setTimeout(()=>{
              this.correoNoValido = false;
            }, 5000);
          }
        })
    }else{
      this.contraseniaNoCoincide = true;
      setTimeout(()=>{
        this.contraseniaNoCoincide = false;
      }, 5000);
      
    }
  }

  iniciarSesion(forma:NgForm){
    this.usuarioIniciar = forma.value;
    //console.log(this.usuarioIniciar);

    let inicio = this._usuarioService.iniciarSesion(this.usuarioIniciar).subscribe(res => {
      //console.log(res);
      if(res == 'Error'){
        this.inicioIncorrecto = true;
        setTimeout(()=>{
          this.inicioIncorrecto = false;
        }, 5000);
      }else{
        this.router.navigate(['/']);
      }
    })

    //console.log(inicio);
    
  }

}
