import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from '../country/country.component';
import { HolidayComponent } from '../holiday/holiday.component';

const routes: Routes = [
  { path: "", component: CountryComponent },
  { path: "holiday", component: HolidayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
