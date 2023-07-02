import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsPageComponent } from './profile-settings-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsPageComponent,
  },
];

@NgModule({
  declarations: [
    ProfileSettingsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ],
  exports: [
    ProfileSettingsPageComponent
  ]
})
export class ProfileSettingsPageModule { }
