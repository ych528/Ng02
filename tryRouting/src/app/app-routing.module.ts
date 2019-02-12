import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
// import { truncate } from 'fs';

import { LayoutGuard } from './layout/layout.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LayoutGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'feature',
    loadChildren: './feature/feature.module#FeatureModule'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'notfound',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
