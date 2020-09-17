import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AreaRestritaComponent } from './area-restrita/area-restrita.component';
import { ClienteDetalheComponent } from './clientes/cliente-detalhe/cliente-detalhe.component';

const ROTAS_PRINCIPAIS: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'area-restrita', component: AreaRestritaComponent },
    { path: 'clientes/cliente/:id', component: ClienteDetalheComponent}
    //{ path: 'clientes/cliente/:id/editar', component: ClienteEditar}
    //{ path: 'clientes/cliente/criar', component: ClienteCriar}
];

export const ROTA_CONF:  ModuleWithProviders = RouterModule.forRoot(ROTAS_PRINCIPAIS);