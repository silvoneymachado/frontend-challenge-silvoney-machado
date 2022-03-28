import { HolidayComponent } from "./../holiday/holiday.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MatTableModule } from "@angular/material/table";

import { HomeRoutingModule } from "./home-routing.module";
import { CountryComponent } from "../country/country.component";

@NgModule({
  declarations: [CountryComponent, HolidayComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
  ],
})
export class HomeModule {}
