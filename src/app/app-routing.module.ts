import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'listado-viajes',
    loadChildren: () => import('./pages/listado-viajes/listado-viajes.module').then( m => m.ListadoViajesPageModule)
  },
  {
    path: 'viajes-disponibles',
    loadChildren: () => import('./pages/viajes-disponibles/viajes-disponibles.module').then( m => m.ViajesDisponiblesPageModule)
  },
  {
    path: 'iniciar-viaje',
    loadChildren: () => import('./pages/iniciar-viaje/iniciar-viaje.module').then( m => m.IniciarViajePageModule)
  },
  {
    path: 'can-viaje',
    loadChildren: () => import('./pages/can-viaje/can-viaje.module').then( m => m.CanViajePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'ini-viaje2',
    loadChildren: () => import('./pages/ini-viaje2/ini-viaje2.module').then( m => m.IniViaje2PageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./pages/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'tomar-viaje',
    loadChildren: () => import('./pages/tomar-viaje/tomar-viaje.module').then( m => m.TomarViajePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
