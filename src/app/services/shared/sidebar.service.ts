import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [{
    titulo: 'principal',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'ProgressBar', url: '/progress'},
      { titulo: 'Graficos', url: '/graficas1'},
      { titulo: 'Promesas', url: '/promesas'},
      { titulo: 'Rxjs', url: '/rxjs'},
   ]
  }
];

  constructor() { }
}
