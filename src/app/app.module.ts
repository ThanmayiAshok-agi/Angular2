import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HighlightDirective } from './highlight.directive';
import { NeedDataService } from './need-data.service';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HighlightDirective,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
