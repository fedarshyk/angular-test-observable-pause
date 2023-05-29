import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActiveUsersComponent } from "./active-users/active-users.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: "",
        component: UserListComponent
      },
      {
        path: "active",
        component: ActiveUsersComponent,
      },
      {
        path: ":id",
        component: UserDetailComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "users"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
