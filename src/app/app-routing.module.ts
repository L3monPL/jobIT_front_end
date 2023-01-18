import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { AppPageModule } from './pages/app-page/app-page.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    // children: [
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //   },
    //   {
    //     path: 'remind-password',
    //     component: RemindPasswordComponent,
    //   },
    //   {
    //     path: 'register',
    //     component: RegisterComponent,
    //   },
    // ]},

  },
  // { path: '**',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
