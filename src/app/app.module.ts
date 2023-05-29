import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { UsersComponent } from "./users/users.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserService } from "./user.service";
import { ActiveUsersComponent } from "./active-users/active-users.component";
import { NavigationService } from "./navigation.service";
import { BackButtonDirective } from "./back-button.directive";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserDetailComponent,
    ActiveUsersComponent,
    BackButtonDirective
  ],
  bootstrap: [AppComponent],
  providers: [UserService, NavigationService]
})
export class AppModule {}
