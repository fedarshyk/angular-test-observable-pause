import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { Location } from "@angular/common"
import { NavigationService } from "../navigation.service";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  user;

  constructor(private route: ActivatedRoute, private service: UserService, private location: Location, private navigation: NavigationService) {}

  ngOnInit() {
    this.user = this.service.getOne(Number(this.route.snapshot.params.id));
  }

  backWithLocation() {
    this.location.back();
  }

  backWithNavigation() {
    this.navigation.back();
  }
}
