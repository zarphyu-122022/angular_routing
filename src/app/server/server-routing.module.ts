import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './server.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '../share/guard/auth-guard.service';
import { DeactiveService } from '../share/guard/deactive.service';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerOneComponent } from './server-one/server-one.component';
const routes: Routes = [
  {
    path: 'server',
    component: ServerComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: ':id', component: ServerOneComponent },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [DeactiveService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class ServerRouting {}
