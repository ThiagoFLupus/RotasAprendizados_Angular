import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-restrita',
  templateUrl: './area-restrita.component.html',
  styleUrls: ['./area-restrita.component.css']
})
export class AreaRestritaComponent implements OnInit {

  nomeUsuario: String;
  senha: number;
  usuarioLogin: Usuario[];

  constructor(private usuario: ClientesService, private navegacao: Router) { }

  ngOnInit(): void {
    
  }

  efetuarLogin(nomeUsuario: String, senha: number){
    this.nomeUsuario= nomeUsuario;
    this.senha= senha;

    this.usuario.getUsuario(this.nomeUsuario, this.senha)
                .subscribe(dados=> {this.usuarioLogin= <Usuario[]>dados;                 
                                    for(let i= 0; i< this.usuarioLogin.length; i++){
                                      if(this.usuarioLogin[i].usuario == this.nomeUsuario && this.usuarioLogin[i].senha == this.senha){
                                        this.navegacao.navigate(['/clientes']); 
                                      }else{
                                        this.navegacao.navigate(['/area-restrita']);
                                        alert("Usuário inválido!");
                                      }
                                    }
                                   });
  }

}
