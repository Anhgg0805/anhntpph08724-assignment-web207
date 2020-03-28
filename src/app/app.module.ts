import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    ProductAddComponent,
    HomeComponent,
    IndexAdminComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
