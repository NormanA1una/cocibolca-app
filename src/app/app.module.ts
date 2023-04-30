import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ProductCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
