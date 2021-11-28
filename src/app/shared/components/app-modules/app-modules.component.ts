import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'j-app-modules',
  templateUrl: './app-modules.component.html',
})
export class AppModulesComponent implements OnInit {
  indexValue = -1;

  apps = [
    {
      icon: 'home.svg',
      title: 'Inicio',
      redirectTo: '',
      enabled: true
    },
    {
      icon: 'process.svg',
      title: 'Mapa de Procesos',
      redirectTo: 'process-managment',
      enabled: true
    },
    {
      icon: 'refresh.svg',
      title: 'Mejora Continua',
      redirectTo: '',
      enabled: false
    },
    {
      icon: 'form.svg',
      title: 'Encuestas',
      redirectTo: '',
      enabled: false
    },
    {
      icon: 'play.svg',
      title: 'Plan de Acción',
      redirectTo: '',
      enabled: false
    },
    {
      icon: 'book.svg',
      title: 'Quejas y Reclamaciones',
      redirectTo: '',
      enabled: false
    },
    {
      icon: 'calendar.svg',
      title: 'Agenda de Actividades ',
      redirectTo: '',
      enabled: false
    },
    {
      icon: 'reporting.svg',
      title: 'Gestión de reportes',
      redirectTo: '',
      enabled: false
    },
    {
      icon: 'folder.svg',
      title: 'Gestor documental',
      redirectTo: '',
      enabled: false
    },
    {
      icon: 'statistics.svg',
      title: 'Gestión de Riesgos',
      redirectTo: '',
      enabled: false
    }
  ];
  constructor(public _router:Router) {}

  ngOnInit(): void {}

  selectedFromButtonGroup(index: number[]) {
    this.indexValue = index[0];
  }
}
