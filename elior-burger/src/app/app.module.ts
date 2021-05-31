import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BurgerLayerComponent } from './components/burger-layer/burger-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerLayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
