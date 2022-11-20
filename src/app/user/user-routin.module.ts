import { UserModule } from './user.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../share/guard/auth-guard.service';
import { UserOneComponent } from './user-one/user-one.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuardService],
    children: [{ path: ':id/:name', component: UserOneComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class UserRoutinModule {}
