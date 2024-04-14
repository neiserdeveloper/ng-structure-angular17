import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'orders',
        loadComponent: () => import('./../app/business/orders/orders.component'),
    },
    {
        path: 'customers',
        loadComponent: () => import('./../app/business/customers/customers.component'),
    },
    {
        path: '',
        redirectTo: '/orders',
        pathMatch: 'full'
    }
];
