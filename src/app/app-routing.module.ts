import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { InventoryListComponent } from './component/inventory-list/inventory-list.component';

const routes: Routes = [
  {path: "home", component: InventoryListComponent},
  {path: "about", component: AboutComponent},
  {path: "", redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
