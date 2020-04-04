import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { AppListingComponent } from './app-listing/app-listing.component';

const routes: Routes = [
  { path: '', component: AppListingComponent, pathMatch: 'full' },
  { path: 'appdetails', component: AppDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
