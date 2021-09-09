import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{path: 'registration',component: RegistrationComponent},     
{path: 'details',component: DetailsComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DetailsComponent,RegistrationComponent]