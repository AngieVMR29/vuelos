import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { AgendarComponent } from './agendar/agendar.component';
import { OtrosComponent } from './otros/otros.component';

const routes: Routes = [
  { path:'',component:AppComponent},
  { path:'inicio',component:InicioComponent},
  { path:'registro',component:RegistroComponent},
  { path:'iniciar',component:IniciarComponent},
  { path:'agendar',component:AgendarComponent},
  { path:'otros',component:OtrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
