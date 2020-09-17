import { Component, OnInit, Output } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  ident: number;
  clientes: Cliente[];
  cliente: Cliente;

  constructor(private paramRota: ActivatedRoute, private service: ClientesService) {
    
   }

  ngOnInit(): void {
    this.paramRota.params.subscribe((params: any)=> this.ident= <number>params['id']);

    this.service.getClientes().subscribe(dados=> {this.clientes= dados;
                                                  for(let i= 0; this.clientes.length; i++){
                                                    if(this.clientes[i].id == this.ident){
                                                      this.cliente= this.clientes[i];                                                   
                                                    }
                                                  } 
                                                  });
  }
}
