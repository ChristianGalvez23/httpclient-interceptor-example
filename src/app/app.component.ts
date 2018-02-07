import { Component, OnInit } from "@angular/core";

import { CountriesService } from "./countries.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  countriesList = [];

  constructor(private _countries: CountriesService) {}

  ngOnInit() {
    this._countries.getCountries().subscribe(res => {
      this.countriesList = res;
    });
  }
}
