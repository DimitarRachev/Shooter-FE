import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StompService } from 'ng2-stomp-service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
