import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


// rutas
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

//ChartsModule
import { ChartsModule } from 'ng2-charts';

// grafico donnas
import { GraficoDonaComponent } from '../components/graficoDona/graficoDona.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }