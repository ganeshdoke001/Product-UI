import { Routes } from '@angular/router';
import { DashComponent } from './componants/dash/dash.component';
import { AddComponent } from './componants/add/add.component';
import { ProductResolveService } from './services/product-resolve.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full',
  },
  {
    path: 'dash',
    component: DashComponent,
    resolve: {
      products: ProductResolveService,
    },
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./componants/edit/edit.component').then((m) => m.EditComponent),
  },
  {
    path: 'add',
    component: AddComponent,
  },
];
