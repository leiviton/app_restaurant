import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { EvaluationComponent } from './dashboard/evaluation.component';

import { DishesComponent } from './dishes.component';
import { NewDisheComponent } from './dishes/new-dishe.component';
import { EditDisheComponent } from './dishes/edit-dishe.component';

import { EditComponent } from './edit.component';

import { RestaurantService } from './restaurant.service';

const appModules: Routes = [
    {
        path: 'dashboard',component: DashboardComponent,
            children: [
                { path: 'evaluation/:id', component: EvaluationComponent }
            ]
    },
    {
        path: 'dishes', component: DishesComponent,
            children: [
                { path: 'new', component: NewDisheComponent },
                { path: 'edit/:id', component: EditDisheComponent },
            ]
    },
    { 
        path: 'edit', component: EditComponent 
    },
  ]

  @NgModule({
      imports:[
          CommonModule,
          FormsModule,
          RouterModule.forRoot(appModules)
      ],
      declarations:[
        DashboardComponent,
        EvaluationComponent,
        DishesComponent,
        EditComponent,
        EditDisheComponent,
        NewDisheComponent
      ],
      providers:[
        RestaurantService
      ]
  })

  export class RestaurantModule {}