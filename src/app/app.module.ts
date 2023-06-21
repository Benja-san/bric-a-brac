import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { GlobalLinkComponent } from './components/global/global-link/global-link.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductComponent } from './pages/product/product.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { InputContainerComponent } from './components/forms/input-container/input-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    GlobalLinkComponent,
    ProductCardComponent,
    ProductComponent,
    UserRegisterComponent,
    InputContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
