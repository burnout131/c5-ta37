import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'characters', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
