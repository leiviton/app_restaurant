import { RouterModule, Routes} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { RestaurantModule } from './restaurants/restaurants.module';
import { UserModule } from './user/user.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from './app-http.service';

const appModules: Routes = [
  {path: '',redirectTo:'/dashboard',pathMatch:'full'}
]

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    RestaurantModule,
    RouterModule.forRoot(appModules)
  ],
  providers: [
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
