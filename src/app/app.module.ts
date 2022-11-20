import { UserModule } from './user/user.module';
import { ServerModule } from './server/server.module';
import { AuthGuardService } from './share/guard/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { UserOneComponent } from './user/user-one/user-one.component';
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { ServerOneComponent } from './server/server-one/server-one.component';
import { FindNotFoundComponent } from './find-not-found/find-not-found.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //ServerComponent,
    // UserComponent,
    // UserOneComponent,
    //EditServerComponent,
    //ServerOneComponent,
    FindNotFoundComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    ServerModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
