import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductManagerComponent} from './product-manager/product-manager.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ProductListComponent },
  { path: "about", component: AboutComponent },
  { path: "service", component: ServiceComponent },
  { path: "product-manager", component: ProductManagerComponent },
  {path : 'product-list',component:ProductListComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'product/edit/:id', component: ProductEditComponent},
  {path :'addProduct',component:ProductAddComponent},
  { path: "404", component: NotFoundComponent },
  // { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
