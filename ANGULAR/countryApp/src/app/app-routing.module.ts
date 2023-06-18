import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

const routes: Routes = [ //definiendo las rutas
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: '**', //cualquier otra ruta que no este definida en el arreglo de rutas se redireccionara a home
        redirectTo: 'home'
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes), //importando el modulo de rutas de angular y pasandole las rutas definidas en el arreglo 

    ],
    exports: [
        RouterModule //exportando el modulo de rutas de angular
    ]
})
export class AppRoutingModule { }
//Lo de arriba es la configuacion basica de rutas