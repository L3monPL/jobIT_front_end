import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './app-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SearchNavModule } from 'src/app/components/search-nav/search-nav.module';
import { MainContentModule } from 'src/app/components/main-content/main-content.module';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { MainContentComponent } from 'src/app/components/main-content/main-content.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppPageComponent,
  // },
  {
    path: 'company',
    component: MainContentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../components/personal-details/personal-details.module').then(m => m.PersonalDetailsModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../components/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../../components/register/register.module').then(m => m.RegisterModule)
      }
    ]
  },
  {
    path: 'company/:id',
    loadChildren: () => import('../../components/company-selected-offer/company-selected-offer.module').then(m => m.CompanySelectedOfferModule)
  },
  {
    path: 'freelancer',
    loadChildren: () => import('../freelancer-page/freelancer-page.module').then(m => m.FreelancerPageModule)
  },
  { path: '**',   redirectTo: 'company/login', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SearchNavModule,
    MainContentModule
  ],
  exports: [
    AppPageComponent,
  ]
})
export class AppPageModule { }
