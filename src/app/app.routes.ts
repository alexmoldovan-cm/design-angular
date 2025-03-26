import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GestionProductosComponent } from './pages/gestion-productos/gestion-productos.component';
import { InformacionStockComponent } from './pages/informacion-stock/informacion-stock.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productos', component: GestionProductosComponent },
  { path: 'informacion-stock', component: InformacionStockComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
