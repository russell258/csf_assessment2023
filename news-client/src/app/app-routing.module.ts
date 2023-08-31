import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './view2/post/post.component';
import { HomeComponent } from './view0/home/home.component';
import { ListComponent } from './view1/list/list.component';

const routes: Routes = [
  {    path: 'post', component: PostComponent},
  {    path: 'upload', component: PostComponent},
  {    path: 'home', component: HomeComponent},
  {    path: 'list/:tag', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
