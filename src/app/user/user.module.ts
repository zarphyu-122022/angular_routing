import { CommonModule } from '@angular/common';
import { ServerRouting } from './../server/server-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserOneComponent } from './user-one/user-one.component';
import { UserComponent } from './user.component';
import { UserRoutinModule } from './user-routin.module';

@NgModule({
  declarations: [UserComponent, UserOneComponent],
  imports:[UserRoutinModule,CommonModule]
})
export class UserModule {}
