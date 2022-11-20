import { AuthGuardService } from './share/guard/auth-guard.service';
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { ServerOneComponent } from './server/server-one/server-one.component';
import { FindNotFoundComponent } from './find-not-found/find-not-found.component';
import { UserComponent } from './user/user.component';
import { ServerComponent } from './server/server.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { UserOneComponent } from './user/user-one/user-one.component';
import { DeactiveService } from './share/guard/deactive.service';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  // {path:'server',loadChildren:() => import('./server/server.module').then(module => module.ServerModule) },
  // {path: 'server',component:ServerComponent,canActivateChild:[AuthGuardService],
  // children:[
  //   {path:':id',component: ServerOneComponent},
  //   {path:':id/edit',component:EditServerComponent,canDeactivate:[DeactiveService]}
  // ]},
  // {path:'user',component:UserComponent,canActivate:[AuthGuardService],
  //  children:[
  //   {path:':id/:name',component:UserOneComponent}
  // ]},
  // {path:'user/:id/:name',component:UserOneComponent},
   {path:'**',component:FindNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
