import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetalheComponent } from './clientes/cliente-detalhe/cliente-detalhe.component';
import { AreaRestritaComponent } from './area-restrita/area-restrita.component';
import { ROTA_CONF } from './app.routing';
import { ClientesService } from './clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { ClienteEditarComponent } from './clientes/cliente-editar/cliente-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    ClienteDetalheComponent,
    AreaRestritaComponent,
    ClienteEditarComponent
  ],
  imports: [
    BrowserModule,
    ROTA_CONF,
    HttpClientModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
