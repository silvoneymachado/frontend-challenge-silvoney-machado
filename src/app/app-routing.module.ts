import { LoginComponent } from './account/login/login.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./shared/services/auth/auth.guard";

const accountModule = () =>
  import("./account/account.module").then((x) => x.AccountModule);
const homeModule = () => import("./home/home.module").then((x) => x.HomeModule);

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    loadChildren: homeModule,
    canActivate: [AuthGuard],
  },
  {
    path: "country",
    loadChildren: homeModule,
    canActivate: [AuthGuard],
  },
  { path: "account", loadChildren: accountModule },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
