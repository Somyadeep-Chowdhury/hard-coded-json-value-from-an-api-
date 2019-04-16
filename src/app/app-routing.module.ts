import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NavComponent } from './nav/nav.component';
import { SuggestComponent } from './suggest/suggest.component';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { AppComponent } from './app.component';
import { ViewSuggestionsComponent } from './view-suggestions/view-suggestions.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  
  {path: 'articles', component: ArticlesComponent},
  {path: 'suggest', component: SuggestComponent},
  {path: 'about', component: AboutComponent},
  // { path: '/suggestions/:name', component: ViewSuggestionsComponent},
  {path: 'suggestions', component: ViewSuggestionsComponent},
  {path: 'api', component: ApiComponent},
  {path: '**', component: ArticlesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
