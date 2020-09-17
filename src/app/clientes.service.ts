import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Usuario } from './area-restrita/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  urlClientes="http://localhost:3000/clientes";
  urlUsuario="http://localhost:3000/usuario";
  http: HttpClient;
  usuario: Usuario;
  usuarioRetorno: Observable<Usuario[]>;
    
  constructor(private httpInjecao: HttpClient) { 
    this.http= this.httpInjecao;
  }

  getClientes(){
    return this.http.get<Cliente[]>(this.urlClientes);
  }

  getUsuario(nome: String, senha: number){
    return this.http.get<Usuario[]>(this.urlUsuario); 
  }
}
