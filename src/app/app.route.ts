import { Route } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { Component } from '@angular/core';

export const APP_ROUTE: Route[] = [
    {
        path: 'welcome',
        loadComponent: () => import('./components/welcome/welcome.component').then((m) => m.WelcomeComponent) ,
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'games',
        loadComponent: () => import('./components/games/games.component').then((m) => m.GamesComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then((m) => m.AboutComponent),
    },    
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome' },
];