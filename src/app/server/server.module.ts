import { ServerRouting } from './server-routing.module';
import { NgModule } from '@angular/core';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerOneComponent } from './server-one/server-one.component';
import { ServerComponent } from './server.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ServerComponent, EditServerComponent, ServerOneComponent],
  imports:[ServerRouting,FormsModule, CommonModule]
})
export class ServerModule {}
