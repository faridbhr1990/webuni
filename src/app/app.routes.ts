import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path : '',
        loadComponent: () =>
          import('./module/layout/layout.component').then(
            (m) => m.LayoutComponent
          )
    }
        
];
