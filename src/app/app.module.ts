import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    ServiceComponent,
    AboutComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductManagerComponent,
    ProductEditComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
