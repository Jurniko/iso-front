import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'j-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      :host nb-layout-header ::ng-deep nav {
        justify-content: flex-end;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  items = [{ title: 'Perfil' }, { title: 'Cerrar Sesión' }];

  itemsMenu: NbMenuItem[] = [
    {
      title: 'Liderazgo',
      children: [
        {
          title: 'Liderazgo y compromiso',
          children: [
            {
              title: 'Generalidades',
            },
            {
              title: 'Enfoque a los estudiantes y otros beneficiarios',
            },
            {
              title:
                'Requisitos adicionales para las necesidades especiales de educación',
            },
          ],
        },
        {
          title: 'Política',
          children: [
            {
              title: 'Desarrollo de la politica',
            },
            {
              title: 'Comunicación de la política',
            },
          ],
        },
        {
          title: 'Roles, responsabilidades y autoridades en la organización',
        },
      ],
    },
    {
      title: 'Planificación',
      children: [
        {
          title: 'Acciones para abordar riesgos y oportunidades',
        },
        {
          title:
            'Objetivos de la organización educación educativa y planificación para lograrlos',
        },
        {
          title:
            'Planificación de los cambios'
        }
      ],
    },
    {
      title: 'Apoyo',
      children: [
        {
          title: 'Recursos', children: [
            { title: 'Generalidades' },
            { title: 'Personas' },
            { title: 'Infraestructura' },
            { title: 'Ambiente para la operación de los procesos educativos' },
            { title: 'Recursos de seguimiento y medición' },
            { title: 'Conocimientos de la organización' },
          ]
        },
        {
          title: 'Competencias', children: [
            { title: 'Generalidades' },
            { title: 'Requisitos adicionales para las necesidades especiales de educación' },
          ]
        },
        { title: 'Toma de conciencia' },
        {
          title: 'Comunicación', children: [
            { title: 'Generalidades' },
            { title: 'Propósito de comunicación' },
            { title: 'Acuerdos de comunicación' },
          ]
        },
        {
          title: 'Información documentada', children: [
            { title: 'Generalidades' },
            { title: 'Creación y actualización' },
            { title: 'Control de la información documentada' },
          ]
        }
      ]
    },
    {
      title: 'Operación',
      children: [
        {
          title: 'Planificación y control operacional', children: [
            { title: 'Generalidades' },
            { title: 'Planificación operacional específica y control de productos y servicios educativos' },
            { title: 'Requisitos adicionales para las necesidades especiales de educación' },
          ]
        },
        {
          title: 'Requisitos para los productos y servicios educativos.', children: [
            { title: 'Determinación de los requisitos para los productos y servicios educativos' },
            { title: 'Comunicación de los requisitos para los productos y servicios educativos' },
            { title: 'Cambios en los requisitos para los productos y servicios educativos' },
          ]
        },
        {
          title: 'Diseño y desarrollo de los productos y servicios educativos ......', children: [
            { title: 'Generalidades' },
            { title: 'Planificación de diseño y desarrollo' },
            { title: 'Entradas para el diseño y desarrollo' },
            { title: 'Controles de diseño y desarrollo.' },
            { title: 'Salidas del diseño y desarrollo' },
            { title: 'Cambios del diseño y desarrollo' },
          ]
        },
        {
          title: 'Control de los procesos, productos y servicios suministrados externamente', children: [
            { title: 'Generalidades' },
            { title: 'Tipo y alcance del control' },
            { title: 'Información para los proveedores externos' },
          ]
        },
        {
          title: 'Producción y provisión del servicio educativo', children: [
            { title: 'Control de la producción y de la provisión del servicio educativo' },
            { title: 'Identificación y trazabilidad' },
            { title: 'Propiedad perteneciente a las partes interesadas .' },
            { title: 'Preservación' },
            { title: 'Protección y transparencia de los datos de los estudiantes' },
            { title: 'Control de los cambios en los productos y servicios educativos' },
          ]
        },
        { title: 'Liberación de los productos y servicios educativos' },
        { title: 'Control de las salidas educativas no conformes ' },
      ]
    },
    {
      title: 'Evaluación del desempeño',
      children: [
        {
          title: 'Seguimiento, medición, análisis y evaluación', children: [
            { title: 'Generalidades' },
            { title: 'Satisfacción del personal, estudiantes y otros beneficiarios' },
            { title: 'Otras necesidades de seguimiento y medición' },
            { title: 'Métodos de seguimiento, medición, análisis y evaluación' },
            { title: 'Análisis y evaluación' },
          ]
        },
        { title: 'Auditoría interna' },
        {
          title: 'Revisión de la dirección', children: [
            { title: 'Generalidades' },
            { title: 'Entradas de revisión por la dirección' },
            { title: 'Salidas de la revisión por la dirección' },
          ]
        },
      ]
    },
    {
      title: 'Mejora',
      children: [
        { title: 'No conformidad y acciones correctivas..' },
        { title: 'Mejora continua' },
        { title: 'Oportunidades de mejora' },
      ]
    }
  ];

  constructor(
    private nbMenuService: NbMenuService,
    private sidebarService: NbSidebarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.itemsMenu = this.recursive(this.itemsMenu)
    this.nbMenuService
      .onItemClick()
      .subscribe(e=>{
        if(e.item.title == 'Cerrar Sesión'){
          localStorage.removeItem('access_token');
          this._router.navigate(['/login']);
        }
      })
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }

  private recursive(items: NbMenuItem[]) {
    items.map(element => {

      if (element.title.length > 35) {
        element.title = element.title.substring(0, 35) + ' ...'
      }
      if (element.children) {
        element.children = element.children?.map(l => {
          if (l.title.length > 23) {
            l.title = l.title.substring(0, 23) + ' ...'
          }
          if (l.children) {
            l.children = l.children?.map(f => {
              if (f.title.length > 20) {
                f.title = f.title.substring(0, 20) + ' ...'
              }
              return f;
            })
          }
          return l;
        })
      }
    })
    return items;
  }

}
