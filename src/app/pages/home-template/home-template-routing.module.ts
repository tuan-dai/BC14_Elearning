import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },

      {
        path: 'search',
        loadChildren: () =>
          import('./search-page/search-page.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'category/:maDanhMuc',
        loadChildren: () =>
          import('./category-course/category-course.module').then(
            (m) => m.CategoryCourseModule
          ),
      },
      {
        path: 'detail/:id',
        loadChildren: () => import("./detail/detail.module").then(m => m.DetailModule)
      },
      {
        path: "profile",
        loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTemplateRoutingModule { }
